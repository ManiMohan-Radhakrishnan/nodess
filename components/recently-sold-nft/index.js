import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./style.module.scss";
import styleSlider from "../nft-more/style.module.scss";
import CollectionCard from "../nft-more/nft-card";
import images from "../../utils/images.json";
import RecentSoldLoader from "../loaders/recentSoldCardLoader";
import { toast } from "react-toastify";
import { nftRecentlySoldApi } from "../../utils/methods";

const RecentlySoldNFT = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const [list, setList] = useState([
    {
      nfts: [
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/n6q782j5loeevgi31tpvshd3siuu",
          name: "Meta Marky #223",
          nft_type: "erc721",
          slug: "W04qY2DFXqNaEwM6",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.687Z",
          owner_slug: "RMeaDPvSaO2Rn1Aw",
          in_cart: null,
          owner_name: "@M Kamran",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "oW0VB9WhR1oVPQrZ",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "4.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "RARE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: null,
              maximum: null,
            },
            level: {
              value: "7",
            },
            next_level: {
              value: "8",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/m1mdpy5b1tv5y2cuobd2ssj7m2bm",
          name: "Meta Marky #62",
          nft_type: "erc721",
          slug: "vBA8m5yF0XaymM9a",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.695Z",
          owner_slug: "RMeaDPvSaO2Rn1Aw",
          in_cart: null,
          owner_name: "@M Kamran",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "1yxem3ghrDdNmaq4",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "4.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "RARE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: null,
              maximum: null,
            },
            level: {
              value: "7",
            },
            next_level: {
              value: "8",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/rf0o7r0ygqxdnlvys7lah1a607sn",
          name: "Meta Hurricane #83",
          nft_type: "erc721",
          slug: "aLV3YLbFVaZ0ER81",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.713Z",
          owner_slug: "1po8DlmSPkZRr4zm",
          in_cart: null,
          owner_name: "@Let's Improve",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "qVyrMOvh0k8bBl1E",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "8.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "EPIC",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: null,
              maximum: null,
            },
            level: {
              value: "10",
            },
            next_level: {
              value: "11",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/s875baldv73hkx5wz4olrx1e4v58",
          name: "Meta Hurricane #107",
          nft_type: "erc721",
          slug: "lRGomQzFjo6lYJPN",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.719Z",
          owner_slug: "JB64rOGSq9OWr5Yz",
          in_cart: null,
          owner_name: "@Hercules Troskie",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "E5Drm55hZ7dgm4bo",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "8.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "EPIC",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: null,
              maximum: null,
            },
            level: {
              value: "9",
            },
            next_level: {
              value: "10",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/ys1dstcpq3topie7uwk580zzl9gn",
          name: "Meta Alien #14",
          nft_type: "erc721",
          slug: "e8bnY87FVP0mBDX9",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.726Z",
          owner_slug: "8jgLn1BSAQ937yE6",
          in_cart: null,
          owner_name: "@Sudhanshu  Sangwan ",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "g0xVMZRhZY1aMZ82",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "100.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "LEGEND",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 1312.0,
              maximum: 50006,
            },
            level: {
              value: "10",
            },
            next_level: {
              value: "11",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/7zyfb6q6ieheyyl8sy7tyvv5tpp4",
          name: "Meta Hammer #470",
          nft_type: "erc721",
          slug: "aLV3YLbFk4QER81r",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.732Z",
          owner_slug: "8jgLn1BSAQ937yE6",
          in_cart: null,
          owner_name: "@Sudhanshu  Sangwan ",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "1gb2PbphNpKpBl8A",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "20.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "RARE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 13382.0,
              maximum: 50006,
            },
            level: {
              value: "5",
            },
            next_level: {
              value: "6",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/q3jlxltreop5dwkqxak1l3edi149",
          name: "Meta Snazzy #849",
          nft_type: "erc721",
          slug: "rg2GYw3F1yJYpwz4",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.738Z",
          owner_slug: "8jgLn1BSAQ937yE6",
          in_cart: null,
          owner_name: "@Sudhanshu  Sangwan ",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "ywrpByvh4ro4MZov",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "20.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "RARE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 16466.0,
              maximum: 50006,
            },
            level: {
              value: "5",
            },
            next_level: {
              value: "6",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/ysco3257r2k6cq0nzpycu73jmvdg",
          name: "Meta Striker #396",
          nft_type: "erc721",
          slug: "oajlEg5FeNBYeA5P",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.743Z",
          owner_slug: "8jgLn1BSAQ937yE6",
          in_cart: null,
          owner_name: "@Sudhanshu  Sangwan ",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "zqgymgeh7WjgM0Vb",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "10.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "ROOKIE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 45132.0,
              maximum: 50006,
            },
            level: {
              value: "1",
            },
            next_level: {
              value: "2",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/vze2ln8fgg3uk00m04vzjacoa0l8",
          name: "Meta Lofter #1936",
          nft_type: "erc721",
          slug: "8eOVEzJFV2aEbL6Z",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.748Z",
          owner_slug: "8jgLn1BSAQ937yE6",
          in_cart: null,
          owner_name: "@Sudhanshu  Sangwan ",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "Z67nMVlh4exymjKO",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "10.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "ROOKIE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "LH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 36060.0,
              maximum: 50006,
            },
            level: {
              value: "1",
            },
            next_level: {
              value: "2",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/lf373g8h8dolpjo43fulsf12o5q2",
          name: "Meta Russ #298",
          nft_type: "erc721",
          slug: "rg2GYw3Fbqy5Ypwz",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.754Z",
          owner_slug: "1bd2ryGSwzZJ3gjE",
          in_cart: null,
          owner_name: "@muzamil Idrees",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "jYJQPx8hdOvGP1z0",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "6.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "RARE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: null,
              maximum: null,
            },
            level: {
              value: "7",
            },
            next_level: {
              value: "8",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/zohtd29mwgcggyfq8u8jyp3cckej",
          name: "Meta Young Gun #411",
          nft_type: "erc721",
          slug: "lNB3KqVFxMA2Ed61",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.760Z",
          owner_slug: "wK7JDabSkYemrvk0",
          in_cart: null,
          owner_name: "@Sajjad ALI",
          owner_avatar_url:
            "https://cdn.jump.trade/j0ho3t6z5xe730k70zt6wc40egx0",
          is_user_fav: null,
          order_details: {
            slug: "LQE2MabhNX1eP0Ya",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "8.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "ROOKIE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: null,
              maximum: null,
            },
            level: {
              value: "5",
            },
            next_level: {
              value: "6",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/4c3c8qemynef5vjd1geit03nkltz",
          name: "Meta Lofter #2481",
          nft_type: "erc721",
          slug: "W04qY2DFbBAEwM6D",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.766Z",
          owner_slug: "Av4wrY0Sga0DEdOP",
          in_cart: null,
          owner_name: "@Subbiah Kannan",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "e5AbmkKhNevpmRXW",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "100.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "ROOKIE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "LH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 36687.0,
              maximum: 50006,
            },
            level: {
              value: "6",
            },
            next_level: {
              value: "7",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/etr6v93kls5zgw9l1v499k9qpk0z",
          name: "Meta Charger #562",
          nft_type: "erc721",
          slug: "A4G9YGVFkkdmDp62",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.771Z",
          owner_slug: "apWL3jVS6ve35bKw",
          in_cart: null,
          owner_name: "@Rahul Kannan",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "gK5yMw3hOjgQM8bN",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "65.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "EPIC",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 5796.0,
              maximum: 50006,
            },
            level: {
              value: "8",
            },
            next_level: {
              value: "9",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/xg5muwb1lpj2oghsrbkxt4qnw50v",
          name: "Meta Natty #2026",
          nft_type: "erc721",
          slug: "aGkVEVZFx5aEA9gQ",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.776Z",
          owner_slug: "87RQ3GlS2o1DjYqe",
          in_cart: null,
          owner_name: "@CH VENKY 167751M4",
          owner_avatar_url:
            "https://cdn.jump.trade/ab50l1zjx970rzmsyfdriwtfxsdr",
          is_user_fav: null,
          order_details: {
            slug: "zaqomr7hQ4XNB7xJ",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "8.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "ROOKIE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "LH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 20061.0,
              maximum: 50006,
            },
            level: {
              value: "4",
            },
            next_level: {
              value: "5",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/h2l6n31zyu32pktpxrvyem88xbgh",
          name: "Meta Smasher #539",
          nft_type: "erc721",
          slug: "DZ1OKb7F16WEeVG3",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.780Z",
          owner_slug: "J6BenBmSNv5grk0A",
          in_cart: null,
          owner_name: "@Bruce Wayne ",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "4QR2P4Nhyw28BrZ8",
            is_buy: true,
            is_bid: true,
            starting_bid: null,
            buy_amount: "7.0",
            minimum_bid: 8.0,
            top_bid: null,
            timed_auction: true,
            auction_start_time: "2024-08-16T13:09:16.087Z",
            auction_end_time: "2024-08-17T13:09:16.087Z",
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "EPIC",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "LH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 4092.0,
              maximum: 50006,
            },
            level: {
              value: "8",
            },
            next_level: {
              value: "9",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/h2ek9xrroxss7gonkyfu9xaxu88y",
          name: "Meta Striker #568",
          nft_type: "erc721",
          slug: "Np1BKx6FbRrml4Gw",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.784Z",
          owner_slug: "J6BenBmSNv5grk0A",
          in_cart: null,
          owner_name: "@Bruce Wayne ",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "Z67nMVlh4eEEmjKO",
            is_buy: true,
            is_bid: true,
            starting_bid: null,
            buy_amount: "4.0",
            minimum_bid: 4.0,
            top_bid: null,
            timed_auction: true,
            auction_start_time: "2024-08-16T10:51:22.737Z",
            auction_end_time: "2024-08-17T10:51:22.737Z",
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "ROOKIE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 46003.0,
              maximum: 50006,
            },
            level: {
              value: "1",
            },
            next_level: {
              value: "2",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/zxuw6ry1xtenkrhip8a5sufo93b2",
          name: "Meta Smasher #540",
          nft_type: "erc721",
          slug: "k43VKJeFLdAY59nx",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.788Z",
          owner_slug: "WAOpDKySLBOnx7zw",
          in_cart: null,
          owner_name: "@Ankit Gupta",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "4ay0Podhkl9rmepz",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "1200000.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "EPIC",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "LH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 4629.0,
              maximum: 50006,
            },
            level: {
              value: "8",
            },
            next_level: {
              value: "9",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/7f2xein72hmqwd93rzjus8vjkv74",
          name: "Meta Gabbar #387",
          nft_type: "erc721",
          slug: "74p5m3dFVJbrYBbw",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.791Z",
          owner_slug: "apWL3jVSkVdM35bK",
          in_cart: null,
          owner_name: "@Meta Marsad",
          owner_avatar_url:
            "https://cdn.jump.trade/nphbyelmbc4kvahy18rshgl37pbs",
          is_user_fav: null,
          order_details: {
            slug: "qVyrMOvh0k9OBl1E",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "19.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "ROOKIE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "LH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: null,
              maximum: null,
            },
            level: {
              value: "6",
            },
            next_level: {
              value: "7",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/syvbg8i3dcs705u4lzwb9dnufrlb",
          name: "Meta Smacker #451",
          nft_type: "erc721",
          slug: "Gk1Wm6pFBX2Kr7y8",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.796Z",
          owner_slug: "lOz1nL2S6bmdDvQK",
          in_cart: null,
          owner_name: "@Ibrahim",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "7LrgB16hQlEqMlAJ",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "8.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "EPIC",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Female",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 5330.0,
              maximum: 50006,
            },
            level: {
              value: "8",
            },
            next_level: {
              value: "9",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/png",
          asset_url: "https://cdn.jump.trade/s73db9g4sp0uwag6vilho2l3sgtm",
          name: "Meta Trippy #338",
          nft_type: "erc721",
          slug: "k43VKJeFXbA9Y59n",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.800Z",
          owner_slug: "poZVD9YS8GjyD8Lv",
          in_cart: null,
          owner_name: "@ElON MUSK",
          owner_avatar_url: null,
          is_user_fav: null,
          order_details: {
            slug: "AljvBGwhZkqEBEKR",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "3.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "ROOKIE",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: null,
              maximum: null,
            },
            level: {
              value: "3",
            },
            next_level: {
              value: "4",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
        {
          asset_type: "image/jpeg",
          asset_url: "https://cdn.jump.trade/zkxhln5a3h0wvbnlv1c66e3jbces",
          name: "Meta Legend #491",
          nft_type: "erc721",
          slug: "lNB3KqVFV66Ed61y",
          quantity: 1,
          is_on_sale: true,
          time: "2024-08-20T11:15:02.803Z",
          owner_slug: "ek6XnwdS2z13R2Ky",
          in_cart: null,
          owner_name: "@Joy Chak",
          owner_avatar_url:
            "https://cdn.jump.trade/qoa5wy527gt8s0r49fgcjbq0c769",
          is_user_fav: null,
          order_details: {
            slug: "1yxem3ghrDe4maq4",
            is_buy: true,
            is_bid: false,
            starting_bid: null,
            buy_amount: "26.0",
            minimum_bid: 0.0,
            top_bid: null,
            timed_auction: false,
            auction_start_time: null,
            auction_end_time: null,
            total_bids: 0,
            bundle_id: null,
          },
          core_statistics: {
            category: {
              value: "LEGEND",
            },
            role: {
              value: "Batsman",
            },
            gender: {
              value: "Male",
            },
            dominant_hand: {
              value: "RH",
            },
            bowling_style: {
              value: null,
            },
            negative_runs: {
              value: null,
            },
            twox_power: {
              value: null,
            },
            six_distance: {
              value: null,
            },
            building_type: {
              value: null,
            },
            shot_direction: {
              value: null,
            },
            nationality: {
              value: null,
            },
            year: {
              value: null,
            },
            city: {
              value: null,
            },
            rank: {
              value: 60.0,
              maximum: 50006,
            },
            level: {
              value: "10",
            },
            next_level: {
              value: "11",
            },
            car_category: {
              value: null,
            },
            name: {
              value: null,
            },
          },
          signed_by: null,
          asset_name: null,
          game_name: "mcl",
          parent_id: null,
          game_max_level: 15,
          put_on_sale: true,
        },
      ],
      next_page: true,
      total_quantity: 10000,
    },
  ]);
  const [update, setUpdate] = useState(0);
  const swiperRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    topTradesList(page);
    setPage(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topTradesList = async (page, sort = "recently_sold") => {
    try {
      page === 1 && setLoading(true);
      let response = await nftRecentlySoldApi(page, sort);
      setList(response?.data?.data?.nfts);
      page === 1 && setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  const handleNavigation = useCallback((direction = "") => {
    setUpdate(Math.random());
    if (!direction || !swiperRef.current) return;
    if (direction === "next") swiperRef.current.swiper.slideNext();
    else swiperRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    setUpdate(Math.random());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperRef?.current?.swiper]);

  return (
    <>
      <section className={`${style["hot-collection-section"]}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div
                className={`${style["sec-heading"]} ${style["live-flex-box"]}`}
              >
                <span className="title">RECENTLY SOLD</span>
                {list?.length > 0 && (
                  <span
                    className={style["viewallBtnliveaction"]}
                    onClick={() => router.push("/nft-marketplace/sale-history")}
                  >
                    View all
                  </span>
                )}
              </div>
              {!loading ? (
                <div className="row">
                  {list?.length > 0 ? (
                    <Swiper
                      className={`${styleSlider["hover-anim"]} recently-sold-swiper px-0`}
                      slidesPerView={4}
                      ref={swiperRef}
                      onSlideChange={() => setUpdate(Math.random())}
                      onReachEnd={() => setUpdate(Math.random())}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        575: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                    >
                      {list[0]?.nfts?.map((nft, i) => {
                        return (
                          <SwiperSlide key={`sider-${i}`}>
                            <CollectionCard
                              key={`live-auction-${i}`}
                              nft={nft}
                              recentSold={true}
                              favouriteNFT={false}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  ) : (
                    <div className="col-12 text-center">
                      <h3 className="my-3 py-5">No Records Found!</h3>
                    </div>
                  )}
                </div>
              ) : (
                <RecentSoldLoader />
              )}
            </div>
          </div>
        </div>

        {list?.length > 0 && (
          <div className={style["carousel-btn-block"]}>
            <button
              className={`${style["arrow-btn"]}`}
              onClick={() => handleNavigation("prev")}
              disabled={
                swiperRef?.current?.swiper?.isBeginning ||
                typeof swiperRef?.current?.swiper?.isBeginning === "undefined"
              }
            >
              <Image
                unoptimized={true}
                src={images.backArrow}
                width="40"
                height="40"
                alt="Arrow"
              />
            </button>
            <button
              className={`${style["arrow-btn"]}`}
              onClick={() => handleNavigation("next")}
              disabled={swiperRef?.current?.swiper?.isEnd}
            >
              <Image
                unoptimized={true}
                src={images.frontArrow}
                width="40"
                height="40"
                alt="Arrow"
              />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default RecentlySoldNFT;
