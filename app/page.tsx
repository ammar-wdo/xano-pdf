'use client'
import { Document, Page, Text, StyleSheet, pdf,PDFViewer } from '@react-pdf/renderer';

export default function Home() {
  return (
  <main className='min-h-screen h-full'>
    
    <PDFViewer style={{ width: '100%', height: '100%' }}>
          <DocumentView />
        </PDFViewer>
 
  </main>
  );
}



const DocumentView = ()=>{
  return ( <Document style={{width:'100%',height:"100%"}}>
    <Page size="A4" style={styles.page}>
      <Text style={styles.section}>Name: </Text>
      <Text style={styles.section}>Email: </Text>
      <Text style={styles.section}>Details: </Text>
    </Page>
  </Document>)
  
}
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