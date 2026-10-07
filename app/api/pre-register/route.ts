interface PreRegistration {
  name: string;
  email: string;
}

function isPreRegistration(value: unknown): value is PreRegistration {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;
  return (
    typeof record.name === "string" &&
    record.name.trim().length > 0 &&
    record.name.trim().length <= 100 &&
    typeof record.email === "string" &&
    record.email.trim().length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email.trim())
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (!isPreRegistration(body)) {
    return Response.json(
      { message: "Enter a valid name and email address." },
      { status: 400 },
    );
  }

  const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!endpoint) {
    console.error("GOOGLE_APPS_SCRIPT_URL is not configured.");
    return Response.json(
      { message: "Registration is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name.trim(),
        email: body.email.trim(),
      }),
      cache: "no-store",
    });
    const result: unknown = await response.json();

    if (
      !response.ok ||
      typeof result !== "object" ||
      result === null ||
      !("ok" in result) ||
      result.ok !== true
    ) {
      console.error("Google Apps Script rejected the registration.");
      return Response.json(
        { message: "Registration could not be saved. Please try again later." },
        { status: 502 },
      );
    }

    return Response.json({
      ok: true,
      duplicate:
        typeof result === "object" &&
        result !== null &&
        "duplicate" in result &&
        result.duplicate === true,
    });
  } catch (error) {
    console.error("Google Sheets submission failed:", error);
    return Response.json(
      { message: "Registration could not be saved. Please try again later." },
      { status: 502 },
    );
  }
}
