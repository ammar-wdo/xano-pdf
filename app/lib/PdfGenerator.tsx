

import React from 'react';
import { Document, Page, Text, StyleSheet, pdf } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = ({ data }:{data:any}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.section}>Name: </Text>
      <Text style={styles.section}>Email: </Text>
      <Text style={styles.section}>Details: </Text>
    </Page>
  </Document>
);

export const createPdf = async (data:any) => {
  const blob = await pdf(<MyDocument data={data} />).toBlob();
  return blob;
};
