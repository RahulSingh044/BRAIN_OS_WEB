const SPREADSHEET_ID = "1ZkTTkh4xkQAwxIMT1bO5GXFNyq-V4HqcAQlYQOeAKPU";
const SHEET_NAME = "Brain OS pre-registration";

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    const registration = JSON.parse(event.postData.contents);
    const name = String(registration.name || "").trim();
    const email = String(registration.email || "").trim();
    const normalizedEmail = email.toLowerCase();

    if (
      !name ||
      name.length > 100 ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return jsonResponse({ ok: false });
    }

    lock.waitLock(10000);

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted At", "Name", "Email"]);
    }

    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const existingEmails = sheet
        .getRange(2, 3, lastRow - 1, 1)
        .getDisplayValues();
      const alreadyRegistered = existingEmails.some(
        ([existingEmail]) =>
          String(existingEmail).trim().toLowerCase() === normalizedEmail,
      );

      if (alreadyRegistered) {
        return jsonResponse({ ok: true, duplicate: true });
      }
    }

    sheet.appendRow([
      new Date(),
      name.startsWith("=") ? "'" + name : name,
      normalizedEmail,
    ]);
    return jsonResponse({ ok: true, duplicate: false });
  } catch (error) {
    console.error("Could not save pre-registration:", error);
    return jsonResponse({ ok: false });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
