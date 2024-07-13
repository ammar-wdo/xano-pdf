

import React from 'react';
import { Document, Page, Text, StyleSheet, pdf, View, Image, Link } from '@react-pdf/renderer';
import { DataType } from '@/components/pdf-generater';
 

 

 
const formatNumber = (number: number) => {
  return new Intl.NumberFormat().format(number);
}; 

const DocumentView = ({data}:{data:DataType}) => {
  return (
    <Document style={{ width: "100%" }}>
      <Page size="A4" style={styles.page}>
        {/* main header */}
        <View style={styles.mainHeader}>
          <View style={styles.userInfo}>
           {data.user.picture?.url && <Image
              style={styles.userPicture}
              src={data.user.picture.url }
            />}
            <View style={styles.infoWrapper}>
              <Text style={styles.userName}>{data.user.name}</Text>
              <Text style={styles.lightFont}>{data.user.company}</Text>
              <Text style={styles.lightFont}>{data.user.contact_email}</Text>
              <Text style={styles.lightFont}>{data.user.phone}</Text>
           
            </View>
          </View>
          {data.user.company_logo?.url && <Image
            style={styles.companyLogo}
            src={data.user.company_logo.url as string}
          />}
        </View>
        {/* availabilities */}
        <View style={styles.availabilitiesContainer}>
          {data.availability.map((availability, index) => (
            <View style={styles.availabilityCard} key={index}  wrap={false}>
              <View style={styles.availabilityImageContainer}>
               { availability.project.main_image?.url&&<Image
                  src={availability.project.main_image.url}
                  style={styles.availabilityImage}
                />}
              </View>
              {/* availability info */}
              <View style={styles.availabilityInfo}>
                <Text style={styles.projectName}>
                  {availability.project?.project_name}
                </Text>
                <Text style={styles.availabilityInfoText}>
                  {availability.unit_number || ''}
                </Text>
                <Text style={styles.availabilityInfoText}>
                  Developer: {availability.project.developer.name}
                </Text>
                <Text style={styles.availabilityInfoText}>
                  District: {availability.project.district.name}
                </Text>
                <Text style={styles.availabilityInfoText}>
                  Handover: {availability.project.handover_date || ''}
                </Text>
                <Text style={styles.availabilityInfoText}>
                  Price: AED {formatNumber(availability.price)}
                </Text>
                <Text style={styles.availabilityInfoText}>
                  Service charge: AED {availability.project.service_charge || ''}
                </Text>
                <Text style={styles.availabilityInfoText}>
                  Unit Type: {availability.type || ''}
                </Text>
                <Text style={styles.availabilityInfoText}>
                  Area: {availability.area_sqft || ''}
                </Text>
                <Text style={{ fontWeight: "semibold", fontSize: 12 }}>
                  Payment plan
                </Text>
                <View style={styles.planContainer}>
                  {availability.project.payment_plan.map((plan, i) => (
                    <View style={styles.planContainerCard} key={i}>
                      <Text style={[styles.lightFont, { marginBottom: 6 }]}>
                        {plan.type} Payment plan
                      </Text>
                      <View style={styles.planRecord}>
                        <Text style={styles.lightFont}>Downpayment</Text>
                        <Text style={styles.lightFont}>
                          {plan.downpayment_perc}%
                        </Text>
                      </View>
                      <View style={styles.planRecord}>
                        <Text style={styles.lightFont}>Pre-handover</Text>
                        <Text style={styles.lightFont}>
                          {plan.prehandover_perc}%
                        </Text>
                      </View>
                      <View style={styles.planRecord}>
                        <Text style={styles.lightFont}>On handover</Text>
                        <Text style={styles.lightFont}>
                          {plan.onhandover_perc}%
                        </Text>
                      </View>
                      <View style={styles.planRecord}>
                        <Text style={styles.lightFont}>Post handover</Text>
                        <Text style={styles.lightFont}>
                          {plan.downpayment_perc}%
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
             { availability.project?.documents &&availability.project?.documents.map(doc=><View key={doc.url} style={styles.buttonDownload}>
  <Link  href={doc.url || ''} style={styles.textButton}>Download brochure</Link>
</View>) }
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 20,
  },

  mainHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    columnGap: 20,
    alignItems: "center",
    padding:6,
    border:'1px solid #eee',
    borderRadius:5
  },
  userPicture: {
    width: 75,
    height: 75,
    borderRadius: "100%",
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: 4,
  },
  userName: {
    fontSize: 14,
  },
  lightFont: {
    fontSize: 10,
    fontWeight: "medium",
  },
  userIcons: {
    display: "flex",
    alignItems: "center",
    columnGap: 12,
    marginTop: 4,
    flexDirection: "row",
  },
  userIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100",
    borderColor: "gray",
    borderWidth: "1px",
    borderStyle: "solid",
    width: 25,
    height: 25,
  },
  companyLogo: {
    width: 110,
    height: 110,
  },
  availabilitiesContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 8,
    marginTop: 12,
    flexWrap:'wrap'
  },
  availabilityCard: {
    display: "flex",
    flexDirection: "column",
    width: "32%",
    border: "1px solid #eee",
    borderRadius: 8,
    overflow: "hidden",
    paddingBottom:8
  },
  availabilityImageContainer: {
    width: "100%",
    height: 130,
    position: "relative",
  },
  availabilityImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  availabilityInfo: {
    padding: 8,
    display: "flex",
    rowGap: 12,
  },
  projectName: {
    fontSize: 12,
    fontWeight: "semibold",
  },
  availabilityInfoText: {
    fontSize: 9,
    fontWeight: "light",
    borderBottom:'1px solid #eee',
    paddingBottom:4,
  

  },
  planContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
    marginTop: 2,
  },
  planContainerCard:{padding:12,borderRadius:5,backgroundColor:'#eee'},
  planRecord: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  buttonDownload:{
    marginTop:'auto',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:4

  },
  textButton:{
    color:'blue',
    fontSize:7
  }
});


export const createPdf = async (data:DataType) => {
    console.log("DATA",data)
  const blob = await pdf(<DocumentView data={data} />).toBlob();
  return blob;
};
