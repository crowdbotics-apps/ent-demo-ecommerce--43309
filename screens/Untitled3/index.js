import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { democonnector_get_productfeedjson_list } from "../../store/demoConnector/democonnector_response_get_productfeeds.slice"

import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Pressable,
  FlatList
} from "react-native"
import { styles } from "../styles/styles"

const ProductDetail = ({ navigation, route }) => {
  const [filtered, setFiltered] = useState(false)
  const [item, setItem] = useState(route.params)
  const regex = /(<([^>]+)>)/gi
  const { entities: Democonnector_response_get_productfeeds } = useSelector(
    state => state.Democonnector_response_get_productfeeds
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(democonnector_get_productfeedjson_list())

    setMainImage(product[0]?.data.media[0].src)
  }, [item])
  const response = Democonnector_response_get_productfeeds
  const product = Democonnector_response_get_productfeeds
    ? response?.filter(i => i.id === item)
    : exampleData.filter(i => i.id === item)
  const typeFilter = response?.filter(obj => {
    return (
      obj?.data.attributes.type == product[0]?.data.attributes.type &&
      obj?.data.attributes.gender == product[0]?.data.attributes.gender &&
      obj?.id != product[0]?.id
    )
  })
  const [mainImage, setMainImage] = useState()

  const priceFormat = price =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate("Untitled2", setFiltered(false))}
        >
          <ImageBackground
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/77px-Levi%27s_logo.svg.png"
            }}
            style={styles.headerImage}
          />
        </Pressable>
        <ImageBackground
          source={require("../images/shopping_bag_FILL0_wght400_GRAD0_opsz24.png")}
          style={styles.bag}
        />
      </View>

      <View style={[styles.flexRow]}>
        <View style={styles.flexColumn1}>
          <ImageBackground
            source={{
              uri: mainImage
            }}
            style={styles.pdpImage}
          />

          <FlatList
            data={product[0]?.data?.media}
            keyExtractor={(index, item) => index}
            numColumns={3}
            renderItem={({ item }) => (
              <Pressable onPress={() => setMainImage(item.src)}>
                <ImageBackground
                  style={styles.pdpImagePr}
                  source={{
                    uri: item?.src
                  }}
                />
              </Pressable>
            )}
          ></FlatList>
          {typeFilter != [{}] ? (
            <>
              <View>
                <Text style={styles.h2}>Customers also view:</Text>
              </View>
            </>
          ) : null}
          <FlatList
            data={typeFilter}
            keyExtractor={item.id}
            numColumns={5}
            renderItem={({ item }) => (
              <View>
                <Pressable onPress={() => setItem(item.id)}>
                  <ImageBackground
                    style={styles.pdpImagePr}
                    source={{
                      uri: item?.data.media[0].src
                    }}
                  />
                </Pressable>
              </View>
            )}
          ></FlatList>
        </View>
        {console.log(product)}
        <View style={styles.flexColumn1}>
          <Text style={styles.title}>{product[0]?.data.name}</Text>
          <Text style={styles.prevProductPrice}>
            {priceFormat(product[0]?.data.pricePrevious)}
          </Text>
          <Text style={styles.productPrice}>
            {priceFormat(product[0]?.data.price)}
          </Text>
          <Pressable onPress={() => console.log("clicked")}>
            <View style={styles.addToBag}>
              <Text style={styles.addToBagText}>Add to Bag</Text>
            </View>
          </Pressable>

          <Text style={styles.description}>
            {product[0]?.data.features?.replace(regex, "")}
          </Text>
          <Text style={styles.materialTitle}>Material:</Text>
          <Text style={styles.material}>
            {product[0]?.data.attributes.material}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetail
const exampleData = [
  {
    id: 453634,
    sku: "269960023",
    data: {
      sku: "269960023",
      name: "Empire Skinny Jeans",
      features:
        "The Levi's® Made &amp; Crafted® Empire Skinny is one of our most versatile-fitting jeans. It sits just below the natural curve of your waist and features a skinny leg that flatters many body types. The resilient high-stretch denim fabric gives in all the right places, yet quickly recovers to its original shape. This pair comes in a classic black for a chic, slimming effect. Signature Levi's® tab and arcuate stitches on back pockets. Bovine Leather patch embossed with Levi's® Made &amp; Crafted® logo",
      pricePrevious: 158,
      price: 114.98,
      url: "https://reg-001-origin.levi-site.com/US/en_US/levi-us-exclusions/empire-skinny-jeans/p/269960023",
      attributes: {
        type: "Jeans",
        gender: "Women",
        material:
          "92% Cotton, 6% Polyester, 2% Elastane (Stretch Denim), Zip fly with metal shank button closure, 5-pocket styling, Imported",
        brand: "Levi's",
        age_group: "Adult"
      },
      active: true,
      categories: [
        {
          name: "jeans",
          path: "clothing/women/jeans",
          i: 2
        },
        {
          name: "clothing",
          path: "clothing",
          i: 2
        },
        {
          name: "women",
          path: "clothing/women",
          i: 2
        }
      ],
      media: [
        {
          src: "https://lsco.scene7.com/is/image/lsco/Levis/clothing/269960023-front-pdp.jpg?$regular_desktop$",
          position: 0,
          label: null,
          attributes: []
        },
        {
          src: "https://lsco.scene7.com/is/image/lsco/Levis/clothing/269960023-side-pdp.jpg?$regular_desktop$",
          position: 1,
          label: null,
          attributes: []
        },
        {
          src: "https://lsco.scene7.com/is/image/lsco/Levis/clothing/269960023-back-pdp.jpg?$regular_desktop$",
          position: 2,
          label: null,
          attributes: []
        }
      ],
      options: ["colour", "size", "width", "length"],
      variations: [
        {
          sku: "26996002302432",
          inventory: 4,
          attributes: {
            colour: "Black / Pitch Black",
            size: "24X32",
            width: "24",
            length: "32"
          },
          upc: "00887035541360"
        },
        {
          sku: "26996002302632",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "26X32",
            width: "26",
            length: "32"
          },
          upc: "00887035541384"
        },
        {
          sku: "26996002302932",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "29X32",
            width: "29",
            length: "32"
          },
          upc: "00887035541407"
        },
        {
          sku: "26996002303032",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "30X32",
            width: "30",
            length: "32"
          },
          upc: "00887035541414"
        },
        {
          sku: "26996002303028",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "30X28",
            width: "30",
            length: "28"
          },
          upc: "00191816942049"
        },
        {
          sku: "26996002302330",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "23X30",
            width: "23",
            length: "30"
          },
          upc: "00191816941837"
        },
        {
          sku: "26996002302332",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "23X32",
            width: "23",
            length: "32"
          },
          upc: "00191816941844"
        },
        {
          sku: "26996002302530",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "25X30",
            width: "25",
            length: "30"
          },
          upc: "00191816941905"
        },
        {
          sku: "26996002302928",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "29X28",
            width: "29",
            length: "28"
          },
          upc: "00191816942018"
        },
        {
          sku: "26996002302930",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "29X30",
            width: "29",
            length: "30"
          },
          upc: "00191816942025"
        },
        {
          sku: "26996002303030",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "30X30",
            width: "30",
            length: "30"
          },
          upc: "00191816942056"
        },
        {
          sku: "26996002303234",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "32X34",
            width: "32",
            length: "34"
          },
          upc: "00191816942131"
        },
        {
          sku: "26996002303332",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "33X32",
            width: "33",
            length: "32"
          },
          upc: "00191816946436"
        },
        {
          sku: "26996002303334",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "33X34",
            width: "33",
            length: "34"
          },
          upc: "00191816946443"
        },
        {
          sku: "26996002303430",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "34X30",
            width: "34",
            length: "30"
          },
          upc: "00191816946467"
        },
        {
          sku: "26996002302634",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "26X34",
            width: "26",
            length: "34"
          },
          upc: "00191816941943"
        },
        {
          sku: "26996002302334",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "23X34",
            width: "23",
            length: "34"
          },
          upc: "00191816941851"
        },
        {
          sku: "26996002302534",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "25X34",
            width: "25",
            length: "34"
          },
          upc: "00191816941912"
        },
        {
          sku: "26996002302734",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "27X34",
            width: "27",
            length: "34"
          },
          upc: "00191816941974"
        },
        {
          sku: "26996002303328",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "33X28",
            width: "33",
            length: "28"
          },
          upc: "00191816942148"
        },
        {
          sku: "26996002302630",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "26X30",
            width: "26",
            length: "30"
          },
          upc: "00191816941936"
        },
        {
          sku: "26996002302428",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "24X28",
            width: "24",
            length: "28"
          },
          upc: "00191816941868"
        },
        {
          sku: "26996002302528",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "25X28",
            width: "25",
            length: "28"
          },
          upc: "00191816941899"
        },
        {
          sku: "26996002302628",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "26X28",
            width: "26",
            length: "28"
          },
          upc: "00191816941929"
        },
        {
          sku: "26996002302732",
          inventory: 1,
          attributes: {
            colour: "Black / Pitch Black",
            size: "27X32",
            width: "27",
            length: "32"
          },
          upc: "00191291608874"
        },
        {
          sku: "26996002302728",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "27X28",
            width: "27",
            length: "28"
          },
          upc: "00191816941950"
        },
        {
          sku: "26996002302828",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "28X28",
            width: "28",
            length: "28"
          },
          upc: "00191816941981"
        },
        {
          sku: "26996002302832",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "28X32",
            width: "28",
            length: "32"
          },
          upc: "00887035541391"
        },
        {
          sku: "26996002302830",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "28X30",
            width: "28",
            length: "30"
          },
          upc: "00191816941998"
        },
        {
          sku: "26996002302934",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "29X34",
            width: "29",
            length: "34"
          },
          upc: "00191816942032"
        },
        {
          sku: "26996002303034",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "30X34",
            width: "30",
            length: "34"
          },
          upc: "00191816942063"
        },
        {
          sku: "26996002303134",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "31X34",
            width: "31",
            length: "34"
          },
          upc: "00191816942094"
        },
        {
          sku: "26996002303132",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "31X32",
            width: "31",
            length: "32"
          },
          upc: "00887035541421"
        },
        {
          sku: "26996002303128",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "31X28",
            width: "31",
            length: "28"
          },
          upc: "00191816942070"
        },
        {
          sku: "26996002303230",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "32X30",
            width: "32",
            length: "30"
          },
          upc: "00191816942117"
        },
        {
          sku: "26996002303330",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "33X30",
            width: "33",
            length: "30"
          },
          upc: "00191816942155"
        },
        {
          sku: "26996002303434",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "34X34",
            width: "34",
            length: "34"
          },
          upc: "00191816946481"
        },
        {
          sku: "26996002303130",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "31X30",
            width: "31",
            length: "30"
          },
          upc: "00191816942087"
        },
        {
          sku: "26996002303228",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "32X28",
            width: "32",
            length: "28"
          },
          upc: "00191816942100"
        },
        {
          sku: "26996002303428",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "34X28",
            width: "34",
            length: "28"
          },
          upc: "00191816946450"
        },
        {
          sku: "26996002302434",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "24X34",
            width: "24",
            length: "34"
          },
          upc: "00191816941882"
        },
        {
          sku: "26996002302730",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "27X30",
            width: "27",
            length: "30"
          },
          upc: "00191816941967"
        },
        {
          sku: "26996002302834",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "28X34",
            width: "28",
            length: "34"
          },
          upc: "00191816942001"
        },
        {
          sku: "26996002302430",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "24X30",
            width: "24",
            length: "30"
          },
          upc: "00191816941875"
        },
        {
          sku: "26996002303232",
          inventory: 0,
          attributes: {
            colour: "Black / Pitch Black",
            size: "32X32",
            width: "32",
            length: "32"
          },
          upc: "00191816942124"
        }
      ]
    }
  }
]
