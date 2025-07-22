import { pdfToText } from 'pdf-ts';

export async function scrapePdfContent(pdfUrl: string) {
  console.log('[scrapePdfContent] Fetching PDF from URL:', pdfUrl);
  const pdfFetch = await fetch(pdfUrl);
  if (!pdfFetch.ok) {
    console.error('[scrapePdfContent] Failed to fetch PDF:', pdfFetch.status, pdfFetch.statusText);
    throw new Error(`Failed to fetch PDF: ${pdfFetch.status} ${pdfFetch.statusText}`);
  }
  const pdfBuffer = await pdfFetch.arrayBuffer();
  if (!pdfBuffer || pdfBuffer.byteLength === 0) {
    console.error('[scrapePdfContent] PDF buffer is empty!');
    throw new Error('PDF buffer is empty');
  }
  try {
    const text = await pdfToText(new Uint8Array(pdfBuffer));
    return text;
  } catch (err) {
    console.error('[scrapePdfContent] Error parsing PDF:', err);
    throw err;
  }
}
