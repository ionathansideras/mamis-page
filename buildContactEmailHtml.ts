export function buildContactEmailHtml({
    firstName,
    lastName,
    email,
    phone,
    preferredDate,
    message,
}: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    preferredDate: string;
    message: string;
}) {
    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    return `
<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Nauja žinutė iš kontaktų formos</title>
  <style>


    /* Mobilus vaizdas */
    @media (max-width: 600px) {
      .container { width: 100% !important; padding: 16px !important; }
      .card { padding: 16px !important; }
      .stack { display: block !important; width: 100% !important; }
      .btn-block { display: block !important; width: 100% !important; }
      .btn-pad { padding-left: 0 !important; padding-right: 0 !important; }
    .col { display:block !important; width:100% !important; padding:0 0 8px 0 !important; }

    }
    /* Bendri mygtukų stiliai (inline-friendly) */
    .btn {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      line-height: 20px;
      text-decoration: none;
      border-radius: 8px;
      mso-padding-alt: 0; /* Outlook */
      display: inline-block;
    }
    /* Dark mode (kai kurie klientai gerbia) */
    @media (prefers-color-scheme: dark) {
      body, .bg { background: #0b0c10 !important; color: #e6e6e6 !important; }
      .card { background: #111317 !important; border-color: #2b2f36 !important; }
      .muted { color: #a7b0be !important; }
      .label { color: #cfd6e4 !important; }
      .divider { border-color: #2b2f36 !important; }
      a { color: #8ab4f8 !important; }
    }
  </style>
</head>
<body class="bg" style="margin:0;padding:0;background:#f5f7fb;color:#111;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f5f7fb;">
    <tr>
      <td align="center" style="padding:24px;">
        <!-- Container -->
        <table role="presentation" class="container" cellpadding="0" cellspacing="0" width="600" style="width:600px;max-width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e6e9f2;">
          <!-- Header -->
          <tr>
            <td style="background:#0e79ff;padding:24px 24px;">
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:20px;line-height:1.3;color:#ffffff;">
                Nauja žinutė iš kontaktų formos
              </h1>
              <p class="muted" style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:rgba(255,255,255,0.9);">
                Kažkas paliko užklausą jūsų svetainėje.
              </p>
            </td>
          </tr>

          <!-- Summary / chips -->
          <tr>
            <td style="padding:20px 24px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 12px;">
                    <span style="display:inline-block;background:#eef5ff;border:1px solid #d6e6ff;color:#0e79ff;font-family:Arial,Helvetica,sans-serif;font-size:12px;padding:6px 10px;border-radius:999px;">
                      Kontaktas iš svetainės
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card with details -->
          <tr>
            <td class="card" style="padding:8px 24px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;background:#ffffff;border:1px solid #e6e9f2;border-radius:10px;">
                <tr>
                  <td style="padding:20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:top;padding:0 0 14px;">
                          <p class="label" style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:.3px;text-transform:uppercase;color:#6b7280;">
                            Vardas, pavardė
                          </p>
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#111;">
                            ${fullName || "—"}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;padding:0 0 14px;">
                          <p class="label" style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:.3px;text-transform:uppercase;color:#6b7280;">
                            El. paštas
                          </p>
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;">
                            <a href="mailto:${email}" style="color:#0e79ff;text-decoration:none;">${
        email || "—"
    }</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;padding:0 0 14px;">
                          <p class="label" style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:.3px;text-transform:uppercase;color:#6b7280;">
                            Telefonas
                          </p>
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;">
                            <a href="tel:${phone}" style="color:#0e79ff;text-decoration:none;">${
        phone || "—"
    }</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;padding:0 0 16px;">
                          <p class="label" style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:.3px;text-transform:uppercase;color:#6b7280;">
                            Pageidaujama data
                          </p>
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#111;">
                            ${preferredDate || "—"}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <hr class="divider" style="border:0;border-top:1px solid #eef0f5;margin:8px 0 16px;">
                          <p class="label" style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:.3px;text-transform:uppercase;color:#6b7280;">
                            Žinutė
                          </p>
                          <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111;background:#fbfcff;border:1px solid #eef0f5;border-radius:8px;padding:14px;">
                            ${message ? message.replace(/\\n/g, "<br>") : "—"}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

             <!-- CTA row: fluid & mobile-safe -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
  <tr>
    <!-- Col 1 -->
    <td class="col" width="50%" align="left" style="padding:0 6px 8px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="mso-padding-alt:12px 16px;background:#0e79ff;border:1px solid #0e79ff;border-radius:8px;">
            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="mailto:${email}" arcsize="10%" strokecolor="#0e79ff" strokeweight="1px" fillcolor="#0e79ff" style="height:40px;v-text-anchor:middle;width:100%;">
              <w:anchorlock/>
              <center style="color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Atsakyti el. paštu</center>
            </v:roundrect>
            <![endif]-->
            <!--[if !mso]><!-- -->
            <a href="mailto:${email}"
               style="display:block;text-decoration:none;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;padding:12px 16px;">
               Atsakyti el. paštu
            </a>
            <!--<![endif]-->
          </td>
        </tr>
      </table>
    </td>

    <!-- Col 2 -->
    <td class="col" width="50%" align="left" style="padding:0 0 8px 6px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="mso-padding-alt:12px 16px;background:#f0f3fa;border:1px solid #dbe1f1;border-radius:8px;">
            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="tel:${phone}" arcsize="10%" strokecolor="#dbe1f1" strokeweight="1px" fillcolor="#f0f3fa" style="height:40px;v-text-anchor:middle;width:100%;">
              <w:anchorlock/>
              <center style="color:#0e79ff;font-family:Arial,Helvetica,sans-serif;font-size:14px;">Paskambinti</center>
            </v:roundrect>
            <![endif]-->
            <!--[if !mso]><!-- -->
            <a href="tel:${phone}"
               style="display:block;text-decoration:none;color:#0e79ff;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;padding:12px 16px;">
               Paskambinti
            </a>
            <!--<![endif]-->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>


              <!-- Footer -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td>
                    <p class="muted" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                      Šis laiškas yra automatinis pranešimas apie naują užklausą iš jūsų svetainės kontaktų formos.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- /Container -->
      </td>
    </tr>
  </table>
</body>
</html>`;
}
