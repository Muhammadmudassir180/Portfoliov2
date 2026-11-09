const ENDPOINT = 'https://api.web3forms.com/submit';

// Context sent along with each message so you know where it came from
export const collectMeta = () => ({
  page: window.location.href,
  sent_at: new Date().toISOString(),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  language: navigator.language,
  browser: navigator.userAgent,
  referrer: document.referrer || 'Direct visit'
});

export const buildPayload = (form, meta, accessKey) => ({
  access_key: accessKey,
  subject: `Portfolio message: ${form.subject}`,
  from_name: form.name,
  replyto: form.email,
  name: form.name,
  email: form.email,
  message: form.message,
  botcheck: form.botcheck,
  ...meta
});

// Web3Forms keys are meant to be public: a key can only deliver to the inbox it was issued for
export async function sendMessage(form) {
  const accessKey = process.env.REACT_APP_WEB3FORMS_KEY;
  if (!accessKey) throw new Error('The contact form is not set up yet.');

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(buildPayload(form, collectMeta(), accessKey))
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'The message could not be sent.');
}
