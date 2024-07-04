// lib/xanoUploader.ts
import axios from 'axios';
import FormData from 'form-data';

export async function uploadToXano(pdfBuffer: Buffer, userId: string): Promise<string> {
  const formData = new FormData();
  formData.append('pdf', pdfBuffer, 'generated.pdf');
  formData.append('user-id', userId);

  const response = await axios.post<any>('https://xail-hf8i-wq8c.g7.xano.io/api:bOCuR_mP/uploads', formData, {
    headers: {
      ...formData.getHeaders(),
    },
  });

  return response.data.uploaded.pdf.url as string;
}


export async function blobToBuffer(blob: Blob): Promise<Buffer> {
    const arrayBuffer = await blob.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }