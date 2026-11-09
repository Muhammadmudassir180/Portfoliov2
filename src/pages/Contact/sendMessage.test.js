import { buildPayload, sendMessage } from './sendMessage';

const form = { name: 'Ali Khan', email: 'ali@example.org', subject: 'Role', message: 'Hi', botcheck: false };

afterEach(() => {
  delete process.env.REACT_APP_WEB3FORMS_KEY;
  delete global.fetch;
});

test('payload carries the message, reply-to and metadata', () => {
  const p = buildPayload(form, { page: 'https://site/contact', timezone: 'Asia/Karachi' }, 'key-1');
  expect(p).toMatchObject({
    access_key: 'key-1',
    subject: 'Portfolio message: Role',
    replyto: 'ali@example.org',
    message: 'Hi',
    page: 'https://site/contact',
    timezone: 'Asia/Karachi'
  });
});

test('refuses to send without an access key', async () => {
  global.fetch = jest.fn();
  await expect(sendMessage(form)).rejects.toThrow('not set up');
  expect(global.fetch).not.toHaveBeenCalled();
});

test('resolves on success and rejects with the service error otherwise', async () => {
  process.env.REACT_APP_WEB3FORMS_KEY = 'key-1';
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: true, json: async () => ({ success: true }) });
  await expect(sendMessage(form)).resolves.toBeUndefined();
  expect(JSON.parse(global.fetch.mock.calls[0][1].body).access_key).toBe('key-1');

  global.fetch = jest.fn().mockResolvedValueOnce({ ok: false, json: async () => ({ success: false, message: 'Invalid key' }) });
  await expect(sendMessage(form)).rejects.toThrow('Invalid key');
});
