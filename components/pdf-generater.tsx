"use client";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  pdf,
  PDFViewer,
  View,
  Image,
  Link,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";

export default function PdfGenerator() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <main className="min-h-screen h-full">
      <PDFViewer style={{ width: "100%", height: "1200px" }}>
        <DocumentView />
      </PDFViewer>
    </main>
  );
}

const data = {
  user: {
    id: "efe43449-eaa3-44a7-9770-53627ade6a24",
    name: "Mohamed Swaghi",
    company: "We Do Digital B.V.",
    currency: "AED",
    metrics: "sqft",
    phone: "0690909090",
    contact_email: "mohamed@nyrealestate.ae",
    picture: {
      url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/XMQq73Aq73JHcbw_4PwldcxvZx4/ExAJNA../images.jpeg",
    },
    company_logo: {
      url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/7RpZoRvJ6V0W3QYB-Mu053QPV9Y/2Rc-PA../3.png",
    },
  },
  availability: [
  
    {
      id: "04af6b75-ab62-4e66-bf0b-e79be22c6adc",
      type: "1 BR",
      price: 1000000,
      unit_number: "001",
      tag: "",
      view: "",
      floor: 1,
      area_sqft: 1000,
      project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
      note: "",
      floorplan: [[]],
      project: {
        id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
        project_name: "Safa One",
        resale_allowed_after: 0,
        amenities: [
          "Security and privacy",
          "Fitness facilities",
          "Swimming pools",
          "Parking facilities",
          "Retail & dining",
          "Spa and wellness facilities",
          "Luxury living",
          "Multipurpose room",
        ],
        developer_id: "e971cab7-d48e-407f-807d-1b8ea0d9a6f9",
        has_posthandover: false,
        min_price: 1600000,
        max_price: 25827000,
        service_charge: 23,
        min_square_ft: 837.65,
        max_square_ft: 5937.16,
        launch_date: null,
        developer_name: "Damac Properties",
        lat: "25.181852744667",
        long: "55.248819713015",
        handover_date: "2026-03-31",
        dld: 4,
        oqood: 0,
        admin_fee: 0,
        district_id: "e1db3d88-1457-4fc9-972a-2661925be5c9",
        project_status: "Sold out",
        emirate: "Dubai",
        property_type: ["Apartment", "Penthouse", "Duplex"],
        bedrooms: ["1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"],
        updated_at: 1719657245545,
        distanc_to_marina: "",
        distance_to_downtown: "",
        distance_to_dxb: "",
        distance_al_maktoum: "",
        location: null,
        main_image: {
          url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/uE4cs4ngckEDg256-ko-VG2BD5I/yzj0rg../Safa_One_0.jpg",
        },
        payment_plan: [
          {
            id: "cd0ab324-f5e1-4a44-8256-12f0adaf6b0f",
            created_at: 1719487354517,
            type: "60/40",
            project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
            downpayment_perc: 20,
            prehandover_perc: 40,
            onhandover_perc: 40,
            posthandover_perc: 0,
            prehandover_schema: [
              {
                name: "Down Payment",
                percentage: 20,
              },
              {
                name: "Instalment 1",
                percentage: 3,
              },
              {
                name: "Instalment 2",
                percentage: 3,
              },
              {
                name: "Instalment 3",
                percentage: 3,
              },
              {
                name: "Instalment 4",
                percentage: 3,
              },
              {
                name: "Instalment 5",
                percentage: 4,
              },
              {
                name: "Instalment 6",
                percentage: 4,
              },
              {
                name: "Instalment 7",
                percentage: 4,
              },
              {
                name: "Instalment 8",
                percentage: 4,
              },
              {
                name: "Instalment 9",
                percentage: 4,
              },
              {
                name: "Instalment 10",
                percentage: 4,
              },
              {
                name: "Instalment 11",
                percentage: 2,
              },
              {
                name: "Instalment 12",
                percentage: 1,
              },
              {
                name: "Instalment 13",
                percentage: 1,
              },
              {
                name: "On Handover",
                percentage: 40,
              },
            ],
            posthandover_schema: [],
          },
          {
            id: "2d7d105e-8f9f-4d4d-9566-5cbdb94cd5b2",
            created_at: 1719487734170,
            type: "90/10",
            project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
            downpayment_perc: 20,
            prehandover_perc: 70,
            onhandover_perc: 10,
            posthandover_perc: 0,
            prehandover_schema: [
              {
                name: "Down Payment",
                percentage: 20,
              },
              {
                name: "Instalment 1",
                percentage: 6,
              },
              {
                name: "Instalment 2",
                percentage: 6,
              },
              {
                name: "Instalment 3",
                percentage: 6,
              },
              {
                name: "Instalment 4",
                percentage: 6,
              },
              {
                name: "Instalment 5",
                percentage: 6,
              },
              {
                name: "Instalment 6",
                percentage: 6,
              },
              {
                name: "Instalment 7",
                percentage: 6,
              },
              {
                name: "Instalment 8",
                percentage: 6,
              },
              {
                name: "Instalment 9",
                percentage: 6,
              },
              {
                name: "Instalment 10",
                percentage: 6,
              },
              {
                name: "Instalment 11",
                percentage: 4,
              },
              {
                name: "Instalment 12",
                percentage: 3,
              },
              {
                name: "Instalment 13",
                percentage: 3,
              },
              {
                name: "On Handover",
                percentage: 10,
              },
            ],
            posthandover_schema: [],
          },
        ],
        district: {
          name: "Safa Park",
        },
        developer: {
          name: "Damac Properties",
          logo: {
            url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/14GPkRZ9iVrHNcGwo5HfarhKRaw/voWx2Q../28.png",
          },
        },
        documents:{
          url:'https://www.google.com'
        }
      },
    },
    {
      id: "04af6b75-ab62-4e66-bf0b-e79be22c6adc",
      type: "1 BR",
      price: 1000000,
      unit_number: "001",
      tag: "",
      view: "",
      floor: 1,
      area_sqft: 1000,
      project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
      note: "",
      floorplan: [[]],
      project: {
        id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
        project_name: "Safa One",
        resale_allowed_after: 0,
        amenities: [
          "Security and privacy",
          "Fitness facilities",
          "Swimming pools",
          "Parking facilities",
          "Retail & dining",
          "Spa and wellness facilities",
          "Luxury living",
          "Multipurpose room",
        ],
        developer_id: "e971cab7-d48e-407f-807d-1b8ea0d9a6f9",
        has_posthandover: false,
        min_price: 1600000,
        max_price: 25827000,
        service_charge: 23,
        min_square_ft: 837.65,
        max_square_ft: 5937.16,
        launch_date: null,
        developer_name: "Damac Properties",
        lat: "25.181852744667",
        long: "55.248819713015",
        handover_date: "2026-03-31",
        dld: 4,
        oqood: 0,
        admin_fee: 0,
        district_id: "e1db3d88-1457-4fc9-972a-2661925be5c9",
        project_status: "Sold out",
        emirate: "Dubai",
        property_type: ["Apartment", "Penthouse", "Duplex"],
        bedrooms: ["1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"],
        updated_at: 1719657245545,
        distanc_to_marina: "",
        distance_to_downtown: "",
        distance_to_dxb: "",
        distance_al_maktoum: "",
        location: null,
        main_image: {
          url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/uE4cs4ngckEDg256-ko-VG2BD5I/yzj0rg../Safa_One_0.jpg",
        },
        payment_plan: [
          {
            id: "cd0ab324-f5e1-4a44-8256-12f0adaf6b0f",
            created_at: 1719487354517,
            type: "60/40",
            project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
            downpayment_perc: 20,
            prehandover_perc: 40,
            onhandover_perc: 40,
            posthandover_perc: 0,
            prehandover_schema: [
              {
                name: "Down Payment",
                percentage: 20,
              },
              {
                name: "Instalment 1",
                percentage: 3,
              },
              {
                name: "Instalment 2",
                percentage: 3,
              },
              {
                name: "Instalment 3",
                percentage: 3,
              },
              {
                name: "Instalment 4",
                percentage: 3,
              },
              {
                name: "Instalment 5",
                percentage: 4,
              },
              {
                name: "Instalment 6",
                percentage: 4,
              },
              {
                name: "Instalment 7",
                percentage: 4,
              },
              {
                name: "Instalment 8",
                percentage: 4,
              },
              {
                name: "Instalment 9",
                percentage: 4,
              },
              {
                name: "Instalment 10",
                percentage: 4,
              },
              {
                name: "Instalment 11",
                percentage: 2,
              },
              {
                name: "Instalment 12",
                percentage: 1,
              },
              {
                name: "Instalment 13",
                percentage: 1,
              },
              {
                name: "On Handover",
                percentage: 40,
              },
            ],
            posthandover_schema: [],
          },
          {
            id: "2d7d105e-8f9f-4d4d-9566-5cbdb94cd5b2",
            created_at: 1719487734170,
            type: "90/10",
            project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
            downpayment_perc: 20,
            prehandover_perc: 70,
            onhandover_perc: 10,
            posthandover_perc: 0,
            prehandover_schema: [
              {
                name: "Down Payment",
                percentage: 20,
              },
              {
                name: "Instalment 1",
                percentage: 6,
              },
              {
                name: "Instalment 2",
                percentage: 6,
              },
              {
                name: "Instalment 3",
                percentage: 6,
              },
              {
                name: "Instalment 4",
                percentage: 6,
              },
              {
                name: "Instalment 5",
                percentage: 6,
              },
              {
                name: "Instalment 6",
                percentage: 6,
              },
              {
                name: "Instalment 7",
                percentage: 6,
              },
              {
                name: "Instalment 8",
                percentage: 6,
              },
              {
                name: "Instalment 9",
                percentage: 6,
              },
              {
                name: "Instalment 10",
                percentage: 6,
              },
              {
                name: "Instalment 11",
                percentage: 4,
              },
              {
                name: "Instalment 12",
                percentage: 3,
              },
              {
                name: "Instalment 13",
                percentage: 3,
              },
              {
                name: "On Handover",
                percentage: 10,
              },
            ],
            posthandover_schema: [],
          },
        ],
        district: {
          name: "Safa Park",
        },
        developer: {
          name: "Damac Properties",
          logo: {
            url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/14GPkRZ9iVrHNcGwo5HfarhKRaw/voWx2Q../28.png",
          },
        },
        documents:{
          url:'www.google.com'
        }
      },
    },
    {
      id: "04af6b75-ab62-4e66-bf0b-e79be22c6adc",
      type: "1 BR",
      price: 1000000,
      unit_number: "001",
      tag: "",
      view: "",
      floor: 1,
      area_sqft: 1000,
      project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
      note: "",
      floorplan: [[]],
      project: {
        id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
        project_name: "Safa One",
        resale_allowed_after: 0,
        amenities: [
          "Security and privacy",
          "Fitness facilities",
          "Swimming pools",
          "Parking facilities",
          "Retail & dining",
          "Spa and wellness facilities",
          "Luxury living",
          "Multipurpose room",
        ],
        developer_id: "e971cab7-d48e-407f-807d-1b8ea0d9a6f9",
        has_posthandover: false,
        min_price: 1600000,
        max_price: 25827000,
        service_charge: 23,
        min_square_ft: 837.65,
        max_square_ft: 5937.16,
        launch_date: null,
        developer_name: "Damac Properties",
        lat: "25.181852744667",
        long: "55.248819713015",
        handover_date: "2026-03-31",
        dld: 4,
        oqood: 0,
        admin_fee: 0,
        district_id: "e1db3d88-1457-4fc9-972a-2661925be5c9",
        project_status: "Sold out",
        emirate: "Dubai",
        property_type: ["Apartment", "Penthouse", "Duplex"],
        bedrooms: ["1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"],
        updated_at: 1719657245545,
        distanc_to_marina: "",
        distance_to_downtown: "",
        distance_to_dxb: "",
        distance_al_maktoum: "",
        location: null,
        main_image: {
          url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/uE4cs4ngckEDg256-ko-VG2BD5I/yzj0rg../Safa_One_0.jpg",
        },
        payment_plan: [
          {
            id: "cd0ab324-f5e1-4a44-8256-12f0adaf6b0f",
            created_at: 1719487354517,
            type: "60/40",
            project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
            downpayment_perc: 20,
            prehandover_perc: 40,
            onhandover_perc: 40,
            posthandover_perc: 0,
            prehandover_schema: [
              {
                name: "Down Payment",
                percentage: 20,
              },
              {
                name: "Instalment 1",
                percentage: 3,
              },
              {
                name: "Instalment 2",
                percentage: 3,
              },
              {
                name: "Instalment 3",
                percentage: 3,
              },
              {
                name: "Instalment 4",
                percentage: 3,
              },
              {
                name: "Instalment 5",
                percentage: 4,
              },
              {
                name: "Instalment 6",
                percentage: 4,
              },
              {
                name: "Instalment 7",
                percentage: 4,
              },
              {
                name: "Instalment 8",
                percentage: 4,
              },
              {
                name: "Instalment 9",
                percentage: 4,
              },
              {
                name: "Instalment 10",
                percentage: 4,
              },
              {
                name: "Instalment 11",
                percentage: 2,
              },
              {
                name: "Instalment 12",
                percentage: 1,
              },
              {
                name: "Instalment 13",
                percentage: 1,
              },
              {
                name: "On Handover",
                percentage: 40,
              },
            ],
            posthandover_schema: [],
          },
          {
            id: "2d7d105e-8f9f-4d4d-9566-5cbdb94cd5b2",
            created_at: 1719487734170,
            type: "90/10",
            project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
            downpayment_perc: 20,
            prehandover_perc: 70,
            onhandover_perc: 10,
            posthandover_perc: 0,
            prehandover_schema: [
              {
                name: "Down Payment",
                percentage: 20,
              },
              {
                name: "Instalment 1",
                percentage: 6,
              },
              {
                name: "Instalment 2",
                percentage: 6,
              },
              {
                name: "Instalment 3",
                percentage: 6,
              },
              {
                name: "Instalment 4",
                percentage: 6,
              },
              {
                name: "Instalment 5",
                percentage: 6,
              },
              {
                name: "Instalment 6",
                percentage: 6,
              },
              {
                name: "Instalment 7",
                percentage: 6,
              },
              {
                name: "Instalment 8",
                percentage: 6,
              },
              {
                name: "Instalment 9",
                percentage: 6,
              },
              {
                name: "Instalment 10",
                percentage: 6,
              },
              {
                name: "Instalment 11",
                percentage: 4,
              },
              {
                name: "Instalment 12",
                percentage: 3,
              },
              {
                name: "Instalment 13",
                percentage: 3,
              },
              {
                name: "On Handover",
                percentage: 10,
              },
            ],
            posthandover_schema: [],
          },
        ],
        district: {
          name: "Safa Park",
        },
        developer: {
          name: "Damac Properties",
          logo: {
            url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/14GPkRZ9iVrHNcGwo5HfarhKRaw/voWx2Q../28.png",
          },
        },
        documents:{
          url:'www.google.com'
        }
      },
    },
  ],
  api1: {
    request: {
      url: "xano-pdf.vercel.app/api/pdf",
      method: "POST",
      headers: [
        "POST /api/pdf HTTP/2",
        "Host: xano-pdf.vercel.app",
        "Accept-Encoding: gzip, deflate",
        "Content-Type: application/json",
        "Accept: application/json",
        "Content-Length: 6647",
      ],
      params: {
        pdf: [
          {
            id: "efe43449-eaa3-44a7-9770-53627ade6a24",
            name: "Mohamed Swaghi",
            company: "We Do Digital B.V.",
            currency: "AED",
            metrics: "sqft",
            phone: "0690909090",
            contact_email: "mohamed@nyrealestate.ae",
            picture: {
              url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/XMQq73Aq73JHcbw_4PwldcxvZx4/ExAJNA../images.jpeg",
            },
            company_logo: {
              url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/7RpZoRvJ6V0W3QYB-Mu053QPV9Y/2Rc-PA../3.png",
            },
          },
          [
            {
              id: "93df3a3b-3580-4306-993f-72a032df84de",
              type: "3 BR",
              price: 6325000,
              unit_number: "VWZ-V1-F38-3804",
              tag: "",
              view: "",
              floor: 38,
              area_sqft: 2524.89,
              project_id: "e91ee153-bfe9-4fe4-9595-fda93d0d83cd",
              note: "3 BED Sky Villa + Pool (Community View)",
              floorplan: [[]],
              project: {
                id: "e91ee153-bfe9-4fe4-9595-fda93d0d83cd",
                project_name: "VIEWZ by Danube",
                resale_allowed_after: 0,
                amenities: [
                  "Security and privacy",
                  "Fitness facilities",
                  "Swimming pools",
                  "Concierge services",
                  "Children's playground",
                  "Parking facilities",
                  "Retail & dining",
                  "Spa and wellness facilities",
                  "Luxury living",
                  "Outdoor spaces",
                ],
                developer_id: "e899e957-48be-45bd-9193-cba0d3ee7df0",
                has_posthandover: false,
                min_price: 1600000,
                max_price: 18240000,
                service_charge: 18,
                min_square_ft: 401,
                max_square_ft: 7153.05,
                launch_date: null,
                developer_name: "Danube Properties",
                lat: "25.065796182341",
                long: "55.140884405599",
                handover_date: "2026-05-15",
                dld: 4,
                oqood: 0,
                admin_fee: 0,
                district_id: "d043405a-8ce3-4807-a794-5acb597338b8",
                project_status: "Available",
                emirate: "Dubai",
                property_type: ["Apartment", "Villa"],
                bedrooms: ["Studio", "1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"],
                updated_at: null,
                distanc_to_marina: "",
                distance_to_downtown: "",
                distance_to_dxb: "",
                distance_al_maktoum: "",
                location: null,
                main_image: {
                  url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/7MH82rFDsgn2MsqTvwtDWmgsgdM/FIdHlQ../VIEWZ+by+Danube.jpg",
                },
                payment_plan: [
                  {
                    id: "d93dcaf1-6647-45c8-bed0-ac73ba3cb5ae",
                    created_at: 1719234030304,
                    type: "64/36",
                    project_id: "e91ee153-bfe9-4fe4-9595-fda93d0d83cd",
                    downpayment_perc: 10,
                    prehandover_perc: 53,
                    onhandover_perc: 1,
                    posthandover_perc: 36,
                    prehandover_schema: [
                      {
                        name: "Instalment 1",
                        percentage: 10,
                      },
                      {
                        name: "Instalment 2",
                        percentage: 10,
                      },
                      {
                        name: "Instalment 3",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 4",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 5",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 6",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 7",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 8",
                        percentage: 13,
                      },
                      {
                        name: "Instalment 9",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 10",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 11",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 12",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 13",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 14",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 15",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 16",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 17",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 18",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 19",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 20",
                        percentage: 12,
                      },
                      {
                        name: "Instalment 21",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 22",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 23",
                        percentage: 1,
                      },
                    ],
                    posthandover_schema: [
                      {
                        name: "36 Months post Project completion from Jul 2026 To Jun 2029",
                        percentage: 1,
                      },
                    ],
                  },
                ],
                district: {
                  name: "JLT (Jumeirah Lake Towers)",
                },
                developer: {
                  name: "Danube Properties",
                  logo: {
                    url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/As7Dn5Z4voV4nj7TE8AjAibSy-I/-REAXQ../22.png",
                  },
                },
              },
            },
            {
              id: "04af6b75-ab62-4e66-bf0b-e79be22c6adc",
              type: "1 BR",
              price: 1000000,
              unit_number: "001",
              tag: "",
              view: "",
              floor: 1,
              area_sqft: 1000,
              project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
              note: "",
              floorplan: [[]],
              project: {
                id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
                project_name: "Safa One",
                resale_allowed_after: 0,
                amenities: [
                  "Security and privacy",
                  "Fitness facilities",
                  "Swimming pools",
                  "Parking facilities",
                  "Retail & dining",
                  "Spa and wellness facilities",
                  "Luxury living",
                  "Multipurpose room",
                ],
                developer_id: "e971cab7-d48e-407f-807d-1b8ea0d9a6f9",
                has_posthandover: false,
                min_price: 1600000,
                max_price: 25827000,
                service_charge: 23,
                min_square_ft: 837.65,
                max_square_ft: 5937.16,
                launch_date: null,
                developer_name: "Damac Properties",
                lat: "25.181852744667",
                long: "55.248819713015",
                handover_date: "2026-03-31",
                dld: 4,
                oqood: 0,
                admin_fee: 0,
                district_id: "e1db3d88-1457-4fc9-972a-2661925be5c9",
                project_status: "Sold out",
                emirate: "Dubai",
                property_type: ["Apartment", "Penthouse", "Duplex"],
                bedrooms: ["1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"],
                updated_at: 1719657245545,
                distanc_to_marina: "",
                distance_to_downtown: "",
                distance_to_dxb: "",
                distance_al_maktoum: "",
                location: null,
                main_image: {
                  url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/uE4cs4ngckEDg256-ko-VG2BD5I/yzj0rg../Safa_One_0.jpg",
                },
                payment_plan: [
                  {
                    id: "cd0ab324-f5e1-4a44-8256-12f0adaf6b0f",
                    created_at: 1719487354517,
                    type: "60/40",
                    project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
                    downpayment_perc: 20,
                    prehandover_perc: 40,
                    onhandover_perc: 40,
                    posthandover_perc: 0,
                    prehandover_schema: [
                      {
                        name: "Down Payment",
                        percentage: 20,
                      },
                      {
                        name: "Instalment 1",
                        percentage: 3,
                      },
                      {
                        name: "Instalment 2",
                        percentage: 3,
                      },
                      {
                        name: "Instalment 3",
                        percentage: 3,
                      },
                      {
                        name: "Instalment 4",
                        percentage: 3,
                      },
                      {
                        name: "Instalment 5",
                        percentage: 4,
                      },
                      {
                        name: "Instalment 6",
                        percentage: 4,
                      },
                      {
                        name: "Instalment 7",
                        percentage: 4,
                      },
                      {
                        name: "Instalment 8",
                        percentage: 4,
                      },
                      {
                        name: "Instalment 9",
                        percentage: 4,
                      },
                      {
                        name: "Instalment 10",
                        percentage: 4,
                      },
                      {
                        name: "Instalment 11",
                        percentage: 2,
                      },
                      {
                        name: "Instalment 12",
                        percentage: 1,
                      },
                      {
                        name: "Instalment 13",
                        percentage: 1,
                      },
                      {
                        name: "On Handover",
                        percentage: 40,
                      },
                    ],
                    posthandover_schema: [],
                  },
                  {
                    id: "2d7d105e-8f9f-4d4d-9566-5cbdb94cd5b2",
                    created_at: 1719487734170,
                    type: "90/10",
                    project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
                    downpayment_perc: 20,
                    prehandover_perc: 70,
                    onhandover_perc: 10,
                    posthandover_perc: 0,
                    prehandover_schema: [
                      {
                        name: "Down Payment",
                        percentage: 20,
                      },
                      {
                        name: "Instalment 1",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 2",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 3",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 4",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 5",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 6",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 7",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 8",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 9",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 10",
                        percentage: 6,
                      },
                      {
                        name: "Instalment 11",
                        percentage: 4,
                      },
                      {
                        name: "Instalment 12",
                        percentage: 3,
                      },
                      {
                        name: "Instalment 13",
                        percentage: 3,
                      },
                      {
                        name: "On Handover",
                        percentage: 10,
                      },
                    ],
                    posthandover_schema: [],
                  },
                ],
                district: {
                  name: "Safa Park",
                },
                developer: {
                  name: "Damac Properties",
                  logo: {
                    url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/14GPkRZ9iVrHNcGwo5HfarhKRaw/voWx2Q../28.png",
                  },
                },
              },
            },
          ],
        ],
      },
    },
    response: {
      headers: [
        "HTTP/1.0 308 Permanent Redirect",
        "Content-Type: application/json",
        "Location: https://xano-pdf.vercel.app/api/pdf",
        "Refresh: 0;url=https://xano-pdf.vercel.app/api/pdf",
        "server: Vercel",
        "HTTP/2 200",
        "access-control-allow-headers: Content-Type, Authorization",
        "access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS",
        "access-control-allow-origin: *",
        "cache-control: public, max-age=0, must-revalidate",
        "content-encoding: gzip",
        "content-type: application/json",
        "date: Sat, 06 Jul 2024 06:54:04 GMT",
        "server: Vercel",
        "strict-transport-security: max-age=63072000; includeSubDomains; preload",
        "vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch",
        "x-matched-path: /api/pdf",
        "x-vercel-cache: MISS",
        "x-vercel-execution-region: iad1",
        "x-vercel-id: cdg1::iad1::62dm4-1720248844172-a581f1533214",
      ],
      result: {
        success: true,
        message: "data recieved",
        url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/KbpQBwVYyrXadDjJdoHPKaEF5_0/P2aI3Q../generated.pdf",
        yourData: {
          pdf: [
            {
              id: "efe43449-eaa3-44a7-9770-53627ade6a24",
              name: "Mohamed Swaghi",
              company: "We Do Digital B.V.",
              currency: "AED",
              metrics: "sqft",
              phone: "0690909090",
              contact_email: "mohamed@nyrealestate.ae",
              picture: {
                url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/XMQq73Aq73JHcbw_4PwldcxvZx4/ExAJNA../images.jpeg",
              },
              company_logo: {
                url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/7RpZoRvJ6V0W3QYB-Mu053QPV9Y/2Rc-PA../3.png",
              },
            },
            [
              {
                id: "93df3a3b-3580-4306-993f-72a032df84de",
                type: "3 BR",
                price: 6325000,
                unit_number: "VWZ-V1-F38-3804",
                tag: "",
                view: "",
                floor: 38,
                area_sqft: 2524.89,
                project_id: "e91ee153-bfe9-4fe4-9595-fda93d0d83cd",
                note: "3 BED Sky Villa + Pool (Community View)",
                floorplan: [[]],
                project: {
                  id: "e91ee153-bfe9-4fe4-9595-fda93d0d83cd",
                  project_name: "VIEWZ by Danube",
                  resale_allowed_after: 0,
                  amenities: [
                    "Security and privacy",
                    "Fitness facilities",
                    "Swimming pools",
                    "Concierge services",
                    "Children's playground",
                    "Parking facilities",
                    "Retail & dining",
                    "Spa and wellness facilities",
                    "Luxury living",
                    "Outdoor spaces",
                  ],
                  developer_id: "e899e957-48be-45bd-9193-cba0d3ee7df0",
                  has_posthandover: false,
                  min_price: 1600000,
                  max_price: 18240000,
                  service_charge: 18,
                  min_square_ft: 401,
                  max_square_ft: 7153.05,
                  launch_date: null,
                  developer_name: "Danube Properties",
                  lat: "25.065796182341",
                  long: "55.140884405599",
                  handover_date: "2026-05-15",
                  dld: 4,
                  oqood: 0,
                  admin_fee: 0,
                  district_id: "d043405a-8ce3-4807-a794-5acb597338b8",
                  project_status: "Available",
                  emirate: "Dubai",
                  property_type: ["Apartment", "Villa"],
                  bedrooms: ["Studio", "1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"],
                  updated_at: null,
                  distanc_to_marina: "",
                  distance_to_downtown: "",
                  distance_to_dxb: "",
                  distance_al_maktoum: "",
                  location: null,
                  main_image: {
                    url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/7MH82rFDsgn2MsqTvwtDWmgsgdM/FIdHlQ../VIEWZ+by+Danube.jpg",
                  },
                  payment_plan: [
                    {
                      id: "d93dcaf1-6647-45c8-bed0-ac73ba3cb5ae",
                      created_at: 1719234030304,
                      type: "64/36",
                      project_id: "e91ee153-bfe9-4fe4-9595-fda93d0d83cd",
                      downpayment_perc: 10,
                      prehandover_perc: 53,
                      onhandover_perc: 1,
                      posthandover_perc: 36,
                      prehandover_schema: [
                        {
                          name: "Instalment 1",
                          percentage: 10,
                        },
                        {
                          name: "Instalment 2",
                          percentage: 10,
                        },
                        {
                          name: "Instalment 3",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 4",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 5",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 6",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 7",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 8",
                          percentage: 13,
                        },
                        {
                          name: "Instalment 9",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 10",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 11",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 12",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 13",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 14",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 15",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 16",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 17",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 18",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 19",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 20",
                          percentage: 12,
                        },
                        {
                          name: "Instalment 21",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 22",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 23",
                          percentage: 1,
                        },
                      ],
                      posthandover_schema: [
                        {
                          name: "36 Months post Project completion from Jul 2026 To Jun 2029",
                          percentage: 1,
                        },
                      ],
                    },
                  ],
                  district: {
                    name: "JLT (Jumeirah Lake Towers)",
                  },
                  developer: {
                    name: "Danube Properties",
                    logo: {
                      url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/As7Dn5Z4voV4nj7TE8AjAibSy-I/-REAXQ../22.png",
                    },
                  },
                },
              },
              {
                id: "04af6b75-ab62-4e66-bf0b-e79be22c6adc",
                type: "1 BR",
                price: 1000000,
                unit_number: "001",
                tag: "",
                view: "",
                floor: 1,
                area_sqft: 1000,
                project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
                note: "",
                floorplan: [[]],
                project: {
                  id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
                  project_name: "Safa One",
                  resale_allowed_after: 0,
                  amenities: [
                    "Security and privacy",
                    "Fitness facilities",
                    "Swimming pools",
                    "Parking facilities",
                    "Retail & dining",
                    "Spa and wellness facilities",
                    "Luxury living",
                    "Multipurpose room",
                  ],
                  developer_id: "e971cab7-d48e-407f-807d-1b8ea0d9a6f9",
                  has_posthandover: false,
                  min_price: 1600000,
                  max_price: 25827000,
                  service_charge: 23,
                  min_square_ft: 837.65,
                  max_square_ft: 5937.16,
                  launch_date: null,
                  developer_name: "Damac Properties",
                  lat: "25.181852744667",
                  long: "55.248819713015",
                  handover_date: "2026-03-31",
                  dld: 4,
                  oqood: 0,
                  admin_fee: 0,
                  district_id: "e1db3d88-1457-4fc9-972a-2661925be5c9",
                  project_status: "Sold out",
                  emirate: "Dubai",
                  property_type: ["Apartment", "Penthouse", "Duplex"],
                  bedrooms: ["1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"],
                  updated_at: 1719657245545,
                  distanc_to_marina: "",
                  distance_to_downtown: "",
                  distance_to_dxb: "",
                  distance_al_maktoum: "",
                  location: null,
                  main_image: {
                    url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/uE4cs4ngckEDg256-ko-VG2BD5I/yzj0rg../Safa_One_0.jpg",
                  },
                  payment_plan: [
                    {
                      id: "cd0ab324-f5e1-4a44-8256-12f0adaf6b0f",
                      created_at: 1719487354517,
                      type: "60/40",
                      project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
                      downpayment_perc: 20,
                      prehandover_perc: 40,
                      onhandover_perc: 40,
                      posthandover_perc: 0,
                      prehandover_schema: [
                        {
                          name: "Down Payment",
                          percentage: 20,
                        },
                        {
                          name: "Instalment 1",
                          percentage: 3,
                        },
                        {
                          name: "Instalment 2",
                          percentage: 3,
                        },
                        {
                          name: "Instalment 3",
                          percentage: 3,
                        },
                        {
                          name: "Instalment 4",
                          percentage: 3,
                        },
                        {
                          name: "Instalment 5",
                          percentage: 4,
                        },
                        {
                          name: "Instalment 6",
                          percentage: 4,
                        },
                        {
                          name: "Instalment 7",
                          percentage: 4,
                        },
                        {
                          name: "Instalment 8",
                          percentage: 4,
                        },
                        {
                          name: "Instalment 9",
                          percentage: 4,
                        },
                        {
                          name: "Instalment 10",
                          percentage: 4,
                        },
                        {
                          name: "Instalment 11",
                          percentage: 2,
                        },
                        {
                          name: "Instalment 12",
                          percentage: 1,
                        },
                        {
                          name: "Instalment 13",
                          percentage: 1,
                        },
                        {
                          name: "On Handover",
                          percentage: 40,
                        },
                      ],
                      posthandover_schema: [],
                    },
                    {
                      id: "2d7d105e-8f9f-4d4d-9566-5cbdb94cd5b2",
                      created_at: 1719487734170,
                      type: "90/10",
                      project_id: "f6bd3a60-008d-4fcc-8fb9-c1a66c6986a2",
                      downpayment_perc: 20,
                      prehandover_perc: 70,
                      onhandover_perc: 10,
                      posthandover_perc: 0,
                      prehandover_schema: [
                        {
                          name: "Down Payment",
                          percentage: 20,
                        },
                        {
                          name: "Instalment 1",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 2",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 3",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 4",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 5",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 6",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 7",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 8",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 9",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 10",
                          percentage: 6,
                        },
                        {
                          name: "Instalment 11",
                          percentage: 4,
                        },
                        {
                          name: "Instalment 12",
                          percentage: 3,
                        },
                        {
                          name: "Instalment 13",
                          percentage: 3,
                        },
                        {
                          name: "On Handover",
                          percentage: 10,
                        },
                      ],
                      posthandover_schema: [],
                    },
                  ],
                  district: {
                    name: "Safa Park",
                  },
                  developer: {
                    name: "Damac Properties",
                    logo: {
                      url: "https://xail-hf8i-wq8c.g7.xano.io/vault/K7wzJo7B/14GPkRZ9iVrHNcGwo5HfarhKRaw/voWx2Q../28.png",
                    },
                  },
                },
              },
            ],
          ],
        },
      },
      status: 200,
    },
  },
};

export type DataType = typeof data;
const formatNumber = (number: number) => {
  return new Intl.NumberFormat().format(number);
};

const DocumentView = () => {
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
            <View style={styles.availabilityCard} key={index}>
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
              <View style={styles.buttonDownload}>
  <Link  href={availability.project.documents.url} style={styles.textButton}>Download brochure</Link>
</View>
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
    padding:12

  },
  textButton:{
    color:'blue',
    fontSize:12
  }
});
