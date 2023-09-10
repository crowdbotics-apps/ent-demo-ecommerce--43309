import { democonnector_get_productfeedjson_list } from "../../store/demoConnector/democonnector_response_get_productfeeds.slice"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { styles } from "../../options/styles/styles"
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView
} from "react-native"

const HomeScreen = ({ navigation }) => {
  const [filtered, setFiltered] = useState(false)
  const [prodFilt, setProdFilt] = useState()
  const [filterText, setFilterText] = useState()
  const { entities: Democonnector_response_get_productfeeds } = useSelector(
    state => state.Democonnector_response_get_productfeeds
  )
  const getApi = fetch("https://cb-kozel.github.io/Data/product-feed.json")
  const response = Democonnector_response_get_productfeeds
    ? Democonnector_response_get_productfeeds
    : exampleData
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(democonnector_get_productfeedjson_list())
  }, [])

  const catFilter = catName =>
    response?.filter(x => x.data?.categories.some(y => y.name == catName))

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
        <Pressable onPress={() => navigation.navigate("ScreenAI4")}>
          <ImageBackground
            source={require("../images/shopping_bag_FILL0_wght400_GRAD0_opsz24.png")}
            style={styles.bag}
          />
        </Pressable>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>SALE ITEMS</Text>
      </View>
      <View style={styles.subHeader}>
        <Pressable
          onPress={() => {
            setFiltered(true),
              setProdFilt(catFilter("men")),
              setFilterText("MEN")
          }}
        >
          <Text style={styles.links}>MEN</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setFiltered(true),
              setProdFilt(catFilter("women")),
              setFilterText("WOMEN")
          }}
        >
          <Text style={styles.links}>WOMEN</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            setFiltered(true), setProdFilt(catFilter("kids"))
          }}
        >
          <Text style={styles.links}>KIDS</Text>
        </Pressable>
        {filtered === true ? (
          <Pressable style={styles.reset} onPress={() => setFiltered(false)}>
            <ImageBackground
              style={styles.removeFilt}
              source={require("../images/close_FILL0_wght400_GRAD0_opsz24.png")}
            ></ImageBackground>
            <Text style={styles.resetText}>{filterText}</Text>
          </Pressable>
        ) : null}
      </View>
      <FlatList
        data={filtered ? prodFilt : response}
        keyExtractor={item => item?.id}
        numColumns={5}
        renderItem={({ item }) => (
          <Pressable
            style={styles.cardContainer}
            onPress={() => {
              navigation.navigate("Untitled3", item?.id), setFiltered(false)
            }}
          >
            <ImageBackground
              source={{
                uri: item?.data.media[0].src
              }}
              style={styles.productImage}
            ></ImageBackground>
            <Text style={styles.productTitleSm}>{item?.data.name}</Text>
            <Text style={styles.productPriceSm}>${item?.data.price}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
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
