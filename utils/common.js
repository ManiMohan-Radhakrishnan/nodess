import dayjs from "dayjs";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import { replace } from "lodash";
import store from "../redux/store";
import images from "../utils/images.json";
import raddx_images from "../utils/raddx-images.json";
import Image from "next/image";

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  const re = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  const sp_re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return re.test(password) || sp_re.test(password);
};

export const validateName = (name) => {
  const re =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  return re.test(name);
};

export const formValidateName = (name) => {
  const re =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u;
  return re.test(name);
};

export const validateTelegramId = (telegramId) => {
  const tp = /([a-zA-Z0-9]+)/;
  return tp.test(telegramId);
};

export const validatePhone = (mobile) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // eslint-disable-line
  return re.test(mobile);
};
export const getOS = () => {
  // Check if window object is defined (client-side)
  if (typeof window !== "undefined") {
    let userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"],
      os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (/Linux/.test(platform)) {
      os = "Linux";
    } else {
      os = "others";
    }

    return os;
  } else {
    // If window is not defined (server-side rendering), return a default value or handle the case accordingly
    return "unknown";
  }
};

export const validateNameReplace = (input) =>
  input
    .replace("  ", " ")
    .replace("--", "-")
    .replace(",,", ",")
    .replace("..", ".")
    .replace("''", "'")
    .replace("-,", "-")
    .replace("-.", "-")
    .replace("-'", "-")
    .replace(",-", ",")
    .replace(",.", ",")
    .replace(",'", ",")
    .replace(".-", ".")
    .replace(".,", ".")
    .replace(".'", ".")
    .replace("'-", "'")
    .replace("',", "'")
    .replace("'.", "'");

export const passwordLength = 6;

export const currencyFormat = (
  value = 0,
  type = "usd",
  fixedDecimalPoint = 2,
  gemClassName = false
) => {
  let currencyValue = parseFloat(value);
  if (isNaN(currencyValue)) return;
  return (
    <>
      {type?.toLowerCase() === "usd" ? (
        "$" +
        currencyValue
          .toFixed(fixedDecimalPoint)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")
      ) : type?.toLowerCase() === "gem" &&
        process.env.NEXT_PUBLIC_GEM_ENV === "staging" ? (
        <>
          <Image
            unoptimized={true}
            width="300"
            height="300"
            loading="eager"
            src={images.gems_icon}
            alt="Player-type"
            priority={true}
            placeholder={"blur"}
            className={`${"diamond_image_wm"} ${
              gemClassName ? "size_ctrl" : ""
            }`}
            blurDataURL={"/sample.gif"}
          />
        </>
      ) : type?.toLowerCase() === "gem" &&
        process.env.NEXT_PUBLIC_GEM_ENV === "prod" ? (
        "$"
      ) : process.env.NEXT_PUBLIC_GEM_ENV === "staging" ? (
        <>
          <Image
            unoptimized={true}
            width="300"
            height="300"
            loading="eager"
            src={images.gems_icon}
            alt="Player-type"
            priority={true}
            placeholder={"blur"}
            className="diamond_image"
            blurDataURL={"/sample.gif"}
          />
          {currencyValue
            .toFixed(fixedDecimalPoint)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </>
      ) : process.env.NEXT_PUBLIC_GEM_ENV === "prod" ? (
        "$" +
        currencyValue
          .toFixed(fixedDecimalPoint)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")
      ) : (
        ""
      )}
    </>
  );
};

// export const abbreviateNumber = (value) => {
//   let newValue = value;
//   if (value >= 1000) {
//     const suffixes = ["", "K", "M", "B", "T"];
//     let suffixNum = Math.floor(("" + value).length / 3);
//     let shortValue = "";
//     for (let precision = 2; precision >= 1; precision--) {
//       shortValue = (
//         suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value
//       ).toPrecision(precision);
//       let dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
//       if (dotLessShortValue.length <= 2) {
//         break;
//       }
//     }
//     console.log(shortValue);
//     if (shortValue % 1 !== 0) shortValue = parseFloat(shortValue).toFixed(1);
//     newValue = shortValue + suffixes[suffixNum];
//   }
//   return newValue;
// };

const intlFormat = (num) => {
  return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
};
export const abbreviateNumber = (num) => {
  if (num >= 1000000000) return intlFormat(num / 1000000000) + "B";
  if (num >= 1000000) return intlFormat(num / 1000000) + "M";
  if (num >= 1000) return intlFormat(num / 1000) + "K";
  return intlFormat(num);
};

export const percDiff = (basePrice, newPrice) => {
  return (((newPrice - basePrice) / basePrice) * 100).toFixed(2);
};

export const validateCurrency = (value) => {
  // const re = /^(\d*)\.?(\d){0,10}$/;
  // const re = /^\d*\.?\d{0,2}$/;
  const re = /^[1-9][0-9]*$/;
  return re.test(value);
};

export const validateCurrencyShot = (value) => {
  // const re = /^(\d*)\.?(\d){0,10}$/;
  // const re = /^\d*\.?\d{0,2}$/;
  const re = /^\d{1,10}(\.\d{0,2})?$/;
  return re.test(value);
};

export const validateQuantity = (value) => {
  const re = /^[1-9][0-9]*$/;
  return re.test(value);
};
export const roundDown = (number, decimals = 2) => {
  number = parseFloat(number);
  return Number(number.toString().match(/^\d+(?:\.\d{0,2})?/));
};

export const precisionRoundMod = (number, precision) => {
  var factor = Math.pow(10, precision);
  var n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round(n * factor) / factor;
};

export const bidBuyError = (code) => {
  // const OK = 200;
  const ERROR = 500;
  const ERROR404 = 404;
  const UNAUTHORIZED = 401;
  const AUCTION_UNBEGUN = 701;
  const AUCTION_ENDED = 702;
  const INVALID_QUANTITY = 703;
  const SOLD = 704;
  const OUT_OF_STOCK = 705;
  const LIMITED_OUT = 706;
  const INSUFFICIENT_BALANCE = 707;
  const INVALID_BID = 708;
  const LOW_BID = 709;
  const INVALID_NFT = 710;
  const INVALID_CATEGORY = 711;
  const KYC_VERIFY = 715;
  const AUCTION_CANCEL_BANNED = 718;
  const NOT_ELIGIBLE = 720;

  switch (code) {
    case ERROR:
      return {
        title: "Oops!",
        description:
          "The request could not be processed at this time. Please try again.!",
      };
    case ERROR404:
      return { title: "Oops!", description: "Not found!" };
    case UNAUTHORIZED:
      return { title: "Error", description: "Unauthorized" };
    case AUCTION_UNBEGUN:
      return { title: "Error", description: "Auction not yet begun" };
    case AUCTION_ENDED:
      return { title: "Error", description: "Auction ended" };
    case INVALID_QUANTITY:
      return { title: "Error", description: "Invalid Quantity" };
    case SOLD:
      return { title: "Oops!", description: "Sold out" };
    case OUT_OF_STOCK:
      return { title: "Oops!", description: "Out of stock" };
    case LIMITED_OUT:
      return { title: "Error", description: "Limited out" };
    case INSUFFICIENT_BALANCE:
      return { title: "Error", description: "Insufficient Balance" };
    case INVALID_BID:
      return { title: "Error", description: "Invalid Bid" };
    case LOW_BID:
      return { title: "Error", description: "Low Bid" };
    case INVALID_NFT:
      return { title: "Error", description: "Invalid NFT" };
    case INVALID_CATEGORY:
      return { title: "Error", description: "Invalid Category" };
    case KYC_VERIFY:
      return {
        title: "Error",
        description: "Please complete your user verification",
      };
    case AUCTION_CANCEL_BANNED:
      return {
        title: "Oops!",
        description: "Auction could not be cancel, there is an active bid!",
      };
    case NOT_ELIGIBLE:
      return {
        title: "Error",
        description:
          "You are not eligible to buy as your PAN Card details matches that of the seller's!",
      };

    default:
      return {
        title: "Oops!",
        description:
          "The request could not be processed at this time. Please try again.!",
      };
  }
};

export const validInternationalPhone = (input, country) => {
  return (
    isPossiblePhoneNumber(input, country) === true &&
    isValidPhoneNumber(input, country) === true &&
    validatePhoneNumberLength(input, country) === undefined
  );
};

export const validateURL = (url) => {
  const re =
    /^http(s?):\/\/(www\.)?(((\w+(([\.\-]{1}([a-z]{2,})+)+)(\/[a-zA-Z0-9\_\=\?\&\.\#\-\W]*)*$)|(\w+((\.([a-z]{2,})+)+)(\:[0-9]{1,5}(\/[a-zA-Z0-9\_\=\?\&\.\#\-\W]*)*$)))|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(([0-9]|([1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]+)+)(\/[a-zA-Z0-9\_\=\?\&\.\#\-\W]*)*)((\:[0-9]{1,5}(\/[a-zA-Z0-9\_\=\?\&\.\#\-\W]*)*$)*))$/; // eslint-disable-line
  // /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  return re.test(url);
};

export const calculateTimeLeft = (input, cInput) => {
  var offset = new Date().getTimezoneOffset();
  var input_utc = new Date(input);
  input_utc.setMinutes(input_utc.getMinutes() - offset);

  let difference;
  if (cInput) {
    var cInput_utc = new Date(cInput);
    cInput_utc.setMinutes(cInput_utc.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc);
  } else {
    var cInput_utc_1 = new Date();
    cInput_utc_1.setMinutes(cInput_utc_1.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc_1);
  }

  var cInput_utc_2 = new Date();
  cInput_utc_2.setMinutes(cInput_utc_2.getMinutes() - offset);

  difference = +new Date(input_utc) - +new Date(cInput_utc_2);

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0.1,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

export const level = (value) => {
  const level = [
    {
      type: "1",
      name: "LVL 1",
      value: images.level1,
    },
    {
      type: "2",
      name: "LVL 2",
      value: images.level2,
    },
    {
      type: "3",
      name: "LVL 3",
      value: images.level3,
    },
    {
      type: "4",
      name: "LVL 4",
      value: images.level4,
    },
    {
      type: "5",
      name: "LVL 5",
      value: images.level5,
    },
    {
      type: "6",
      name: "LVL 6",
      value: images.level6,
    },
    {
      type: "7",
      name: "LVL 7",
      value: images.level7,
    },
    {
      type: "8",
      name: "LVL 8",
      value: images.level8,
    },
    {
      type: "9",
      name: "LVL 9",
      value: images.level9,
    },
    {
      type: "10",
      name: "LVL 10",
      value: images.level10,
    },
    {
      type: "11",
      name: "LVL 11",
      value: images.level11,
    },
    {
      type: "12",
      name: "LVL 12",
      value: images.level12,
    },
    {
      type: "13",
      name: "LVL 13",
      value: images.level13,
    },
    {
      type: "14",
      name: "LVL 14",
      value: images.level14,
    },
    {
      type: "15",
      name: "LVL 15",
      value: images.level15,
    },
  ];
  const levelData = level.find((obj) => obj.type === value?.toString());
  return levelData;
};

export const hurleyLevels = (value) => {
  const hurleyLevelsList = [
    {
      type: "1",
      name: "LVL 1",
      value: images.hlevel1,
    },
    {
      type: "2",
      name: "LVL 2",
      value: images.hlevel2,
    },
    {
      type: "3",
      name: "LVL 3",
      value: images.hlevel3,
    },
    {
      type: "4",
      name: "LVL 4",
      value: images.hlevel4,
    },
    {
      type: "5",
      name: "LVL 5",
      value: images.hlevel5,
    },
    {
      type: "6",
      name: "LVL 6",
      value: images.hlevel6,
    },
    {
      type: "7",
      name: "LVL 7",
      value: images.hlevel7,
    },
    {
      type: "8",
      name: "LVL 8",
      value: images.hlevel8,
    },
    {
      type: "9",
      name: "LVL 9",
      value: images.hlevel9,
    },
    {
      type: "10",
      name: "LVL 10",
      value: images.hlevel0,
    },
  ];

  const finalHulreyLevels = hurleyLevelsList.find(
    (obj) => obj.type === value?.toString()
  );
  return finalHulreyLevels;
};

export const getRoleInfo = (value, style) => {
  const role = [
    {
      type: "Batsman",
      name: "BATSMAN",
      style: "LH",
      value: images.batsmanLH,
    },
    {
      type: "Batsman",
      name: "BATSMAN",
      style: "RH",
      value: images.batsmanRH,
    },
    {
      type: "Bowler",
      name: "BOWLER",
      style: "LA",
      value: images.bowlerLA,
    },
    {
      type: "Bowler",
      name: "BOWLER",
      style: "RA",
      value: images.bowlerRA,
    },
    {
      type: "Bat",
      name: "BAT",
      style: "BAT",
      value: images.bat,
    },
    {
      type: "Fielder",
      name: "FIELDER",
      style: "Fielder",
      value: images.field,
    },
  ];
  const roleData = role.find(
    (obj) => obj.type === value && obj.style === style
  );
  return roleData;
};

export const getPlayerCategoryInfo = (value) => {
  const playerCategory = [
    {
      type: "ROOKIE",
      value: "RO",
      color: "blue_color",
      textColor: "#3b56ff",
    },
    {
      type: "RARE",
      value: "RA",
      color: "orange_color",
      textColor: "#f58220",
    },
    {
      type: "EPIC",
      value: "EP",
      color: "purple_color",
      textColor: "#9e6cef",
    },
    {
      type: "LEGEND",
      value: "LG",
      color: "multi_color",
      textColor: "linear-gradient(202deg, #e2ff00, #18e0e0, #e8318d)",
    },
    {
      type: "SUPER RARE",
      value: "SR",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "ULTRA RARE",
      value: "UR",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "IMMORTAL",
      value: "IM",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "ULTRA LEGEND",
      value: "UL",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "UNIQUE",
      value: "UN",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "PREMIUM",
      value: "PR",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "SUPERIOR",
      value: "SP",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "STANDARD",
      value: "ST",
      color: "lavender_color",
      textColor: "#803cef",
    },
  ];

  const playerCatData = playerCategory.find((obj) => obj.type === value);
  return playerCatData;
};

export const hurleyCategory = (value) => {
  const hurleyCategory = [
    {
      type: "RARE",
      value: "RA",
    },
    {
      type: "EPIC",
      value: "EP",
    },
    {
      type: "LEGENDARY",
      value: "LG",
    },
    {
      type: "IMMORTAL",
      value: "IM",
    },
    {
      type: "COMMON",
      value: "CO",
    },
    {
      type: "UNCOMMON",
      value: "UCO",
    },
  ];

  const finalHurleyCategoryData = hurleyCategory.find(
    (obj) => obj.type === value
  );
  return finalHurleyCategoryData;
};

export const getPlayerHandInfo = (hand, bowling_style = "") => {
  const handConfig = {
    LH: "Left Hand",
    RH: "Right Hand",
    LA: "Left Arm",
    RA: "Right Arm",
  };

  const bowlingConfig = {
    Fast: "Fast",
    "Med Fast": "Medium Fast",
    "Leg Spin": "Leg Spin",
    "Off Spin": "Off Spin",
  };

  return `${handConfig[hand] || ""} ${
    bowlingConfig[bowling_style] || ""
  }`.trim();
};

export const shotDirection = (value) => {
  const shotDirection = [
    {
      type: "0",
      name: "0",
      value: images.shot_direction_00,
    },
    {
      type: "1",
      name: "1",
      value: images.shot_direction_01,
    },
    {
      type: "2",
      name: "2",
      value: images.shot_direction_02,
    },
    {
      type: "3",
      name: "3",
      value: images.shot_direction_03,
    },
    {
      type: "4",
      name: "4",
      value: images.shot_direction_04,
    },
    {
      type: "5",
      name: "5",
      value: images.shot_direction_05,
    },
    {
      type: "6",
      name: "6",
      value: images.shot_direction_06,
    },
    {
      type: "7",
      name: "7",
      value: images.shot_direction_07,
    },
    {
      type: "8",
      name: "8",
      value: images.shot_direction_08,
    },
    {
      type: "9",
      name: "9",
      value: images.shot_direction_09,
    },
    {
      type: "10",
      name: "10",
      value: images.shot_direction_10,
    },
    {
      type: "11",
      name: "11",
      value: images.shot_direction_11,
    },
  ];
  const shotDirectionData = shotDirection.find((obj) => obj.type == value);
  return shotDirectionData;
};
export const fieldingDirection = (value) => {
  const fieldingDirection = [
    {
      type: "0",
      name: "0",
      value: images.shot_direction_00,
    },
    {
      type: "1",
      name: "1",
      value: images.shot_direction_01,
    },
    {
      type: "2",
      name: "2",
      value: images.shot_direction_02,
    },
    {
      type: "3",
      name: "3",
      value: images.shot_direction_03,
    },
    {
      type: "4",
      name: "4",
      value: images.shot_direction_04,
    },
    {
      type: "5",
      name: "5",
      value: images.shot_direction_05,
    },
    {
      type: "6",
      name: "6",
      value: images.shot_direction_06,
    },
    {
      type: "7",
      name: "7",
      value: images.shot_direction_07,
    },
    {
      type: "8",
      name: "8",
      value: images.shot_direction_08,
    },
    {
      type: "9",
      name: "9",
      value: images.shot_direction_09,
    },
    {
      type: "10",
      name: "10",
      value: images.shot_direction_10,
    },
    {
      type: "11",
      name: "11",
      value: images.shot_direction_11,
    },
  ];
  const fieldingDirectionData = fieldingDirection.find(
    (obj) => obj.type === value?.toString()
  );

  return fieldingDirectionData;
};

export const Nationality = (value) => {
  const Nationality = [
    {
      type: "India",
      name: "India",
      value: images.shot_country_india,
    },
    {
      type: "Australia",
      name: "Australia",
      value: images.shot_country_australia,
    },
    {
      type: "Bangladesh",
      name: "Bangladesh",
      value: images.shot_country_bangladesh,
    },
    {
      type: "England",
      name: "England",
      value: images.shot_country_england,
    },
    {
      type: "New Zealand",
      name: "New Zealand",
      value: images.shot_country_newZealand,
    },
    {
      type: "Pakistan",
      name: "Pakistan",
      value: images.shot_country_pakistan,
    },
    {
      type: "South Africa",
      name: "South Africa",
      value: images.shot_country_southAfrica,
    },
    {
      type: "Sri Lanka",
      name: "Sri Lanka",
      value: images.shot_country_srilanka,
    },
    {
      type: "Zimbabwe",
      name: "Zimbabwe",
      value: images.shot_country_zimbabwe,
    },
  ];
  const NationalityData = Nationality.find((obj) => obj.type === value);
  return NationalityData;
};

export const batPower = (value) => {
  const batPower = [
    {
      type: "1",
      name: "BAT",
      value: images.bat_power_01,
    },
    {
      type: "2",
      name: "BAT",
      value: images.bat_power_02,
    },
    {
      type: "3",
      name: "BAT",
      value: images.bat_power_03,
    },
  ];
  const batPowerData = batPower.find((obj) => obj.type == value?.toString());
  return batPowerData;
};

export const detectWhatsapp = (uri, window) => {
  const onIE = () => {
    return new Promise((resolve) => {
      window.navigator.msLaunchUri(
        uri,
        () => resolve(true),
        () => resolve(false)
      );
    });
  };
  const notOnIE = () => {
    return new Promise((resolve) => {
      const a =
        document.getElementById("wapp-launcher") || document.createElement("a");
      a.id = "wapp-launcher";
      a.href = uri;
      a.style.display = "none";
      document.body.appendChild(a);

      const start = Date.now();
      const timeoutToken = setTimeout(() => {
        if (Date.now() - start > 1250) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);

      const handleBlur = () => {
        clearTimeout(timeoutToken);
        resolve(true);
      };
      window.addEventListener("blur", handleBlur);

      a.click();
    });
  };

  return window.navigator.msLaunchUri ? onIE() : notOnIE();
};

export const errorRedirect = (statusCode) => {
  let props = {};
  switch (statusCode) {
    case 404:
      return { notFound: true };
    case 401:
      return {
        redirect: {
          permanent: false,
          destination: "https://jumpaccounts.guardiannft.org/signin",
        },
      };
    case 500:
      return {
        redirect: {
          permanent: false,
          destination: "/500",
        },
      };
    default:
      return { props };
  }
};

export const getExplorePageMetaData = (page = "default") => {
  const config = {
    default: {
      metaTitle: "Explore NFT Collection | Jump.trade",
      metaDescription:
        "Get your hands on some of the most prized and highly collectible cricket NFTs at Jump.trade. Buy, sell, & collect exclusive NFTs today.",
    },
    "sachin-tendulkar-nfts": {
      title: "SACHIN TENDULKAR NFTs",
      description:
        "Considered the greatest batsman to play cricket across both big formats all over the world, and by Indians as 'God of Cricket', Sachin Tendulkar NFTs are a pride to possess for any cricket fan anywhere in the world!",
      metaTitle: "Sachin NFTs | Sachin Tendulkar NFT Collection| Jump.Trade",
      metaDescription:
        "Get your hands on the exclusive Sachin Tendulkar NFTs from jump.trade. Discover the signed digital bat NFTs of the Master Blaster himself here. Sign up now!",
      name: "Sachin Tendulkar",
      value: "sachin-tendulkar-nfts",
      checked: false,
    },
    "don-bradman-nfts": {
      title: "DON BRADMAN NFTs",
      description:
        "Widely regarded as the greatest human ever to play Cricket, the Don averaged 99.94 in tests, the highest-ever by a distance. Buy your Sir Don Bradman NFTs and up your collection-game in cricket.",
      metaTitle: "Don Bradman NFTs | Don Bradman NFT Collection | Jump.Trade",
      metaDescription:
        "Be a part of the legacy of cricket by owning Don Bradman NFTs from Jump.trade. Access these super-exclusive cricket NFTs of legendary players here. Sign up now!",
      name: "Don Bradman",
      value: "don-bradman-nfts",
      checked: false,
    },
    "rahul-dravid-nfts": {
      title: "RAHUL DRAVID NFTs",
      description:
        "Popularly and fittingly known as 'The Wall', Rahul Dravid's defensive play in the longer format would frustrate even the most efficient bowlers. Buy your Rahul Dravid NFTs on Jump.trade.",
      metaTitle: "Rahul Dravid NFTs | Rahul Dravid NFT Collection | Jump.Trade",
      metaDescription:
        "Own a Rahul Dravid NFT and add a solid collection of cricket NFTs to your wallet. Find more cricket NFTs, cricket player NFTs, and signed digital bats here!",
      name: "Rahul Dravid",
      value: "rahul-dravid-nfts",
      checked: false,
    },
    "ricky-ponting-nfts": {
      title: "RICKY PONTING NFTs",
      description:
        "The most successful captain in history led the Australian team in an era of unsurpassed glory. Buy your Ricky Ponting NFTs to experience the essence of this awesome captain, wristy batsman, and fielder.",
      metaTitle:
        "Ricky Ponting NFTs | Ricky Ponting NFT Collection | Jump.Trade",
      metaDescription:
        "Buy the authenticated Ricky Ponting NFTs here. Explore the digital signed bat NFTs of several legendary cricket players here. Sign up with Jump.trade now!",
      name: "Ricky Ponting",
      value: "ricky-ponting-nfts",
      checked: false,
    },
    "shane-warne-nfts": {
      title: "SHANE WARNE NFTs",
      description:
        "The undoubted king of leg spin has more than 700 test wickets to his credit, and he captained Rajasthan team to their first victory. Spin your way into cricket NFTs by buying your Shane Warne NFTs.",
      metaTitle: "Shane Warne NFTs | Shane Warne NFT Collection | Jump.Trade",
      metaDescription:
        "Own a Shane Warne NFT and cherish it forever.  Collect this signed digital bat and have an upperhand in the cricket metaverse. Explore more such authentic cricket player signed bat NFTs here!",
      name: "Shane Warne",
      value: "shane-warne-nfts",
      checked: false,
    },
    "viv-richards-nfts": {
      title: "VIV RICHARDS NFTs",
      description:
        "This West Indian, considered one of the greatest batsmen of all time, redefined attacking batting with his power-hitting capabilities. Buy your Vivian Richards NFTs and strike big with your collectibles!",
      metaTitle: "Viv Richards NFTs | Viv Richards NFT Collection | Jump.Trade",
      metaDescription:
        "Hold a piece of the history of cricket by owning a Viv Richards NFTs from Jump.trade. Access these legendary signed digital bat NFTs here. Sign up now!",
      name: "Viv Richards",
      value: "viv-richards-nfts",
      checked: false,
    },
    "shane-watson-nfts": {
      title: "SHANE WATSON NFTs",
      description:
        "An embodiment of versatility and dedication, Shane Watson is one of the few cricketers to open both batting and bowling for Australia & Chennai. Get your hands on these coveted Shane Watson NFTs.",
      metaTitle: "Shane Watson NFTs | Shane Watson NFT Collection | Jump.Trade",
      metaDescription:
        "Your only destination to buy Shane Watson NFTs. Access these authenticated cricket NFTs on Jump.trade to be a powerful hitter in the cricket metaverse. Sign up now!",
      name: "Shane Watson",
      value: "shane-watson-nfts",
      checked: false,
    },
    "harbhajan-singh-nfts": {
      title: "HARBHAJAN SINGH NFTs",
      description:
        "Popularly known as The Turbanator, this Doosra-specialist off-spinner is the first ever Indian to take a hat-trick and has broken partnerships in tests. Buy your Harbhajan Singh NFTs now!",
      metaTitle:
        "Harbhajan Singh NFTs | Harbhajan Singh NFT Collection | Jump.Trade",
      metaDescription:
        "Own a Harbhajan Singh NFT and make a leg-breaker move in your NFT collecting experience. Access these super rare cricket NFTs only on Jump.trade. Sign up now!",
      name: "Harbhajan Singh",
      value: "harbhajan-singh-nfts",
      checked: false,
    },
    "matthew-hayden-nfts": {
      title: "MATTHEW HAYDEN NFTs",
      description:
        "Matthew Hayden redefined blitzkrieg opening in all forms of the game and his contribution to the Chennai team are also remarkable. Get your hands on these prized Matthew Hayden NFTs.",
      metaTitle:
        "Matthew Hayden NFTs | Matthew Hayden NFT Collection | Jump.Trade",
      metaDescription:
        "Take pride in owning the incredible Matthew Hayden NFTs from Jump.trade. Explore this space to find authentic signed digital bats of legendary cricket players. Sign up now!",
      name: "Matthew Hayden",
      value: "matthew-hayden-nfts",
      checked: false,
    },
    "andrew-symonds-nfts": {
      title: "ANDREW SYMONDS NFTs",
      description:
        "Popularly known as Roy, this prolific all-rounder who passed away recently created an unparalleled legacy in cricket with his aggressive performance. Buy your Andrew Symonds NFTs.",
      metaTitle:
        "Andrew Symonds NFTs | Andrew Symonds NFT Collection | Jump.Trade",
      metaDescription:
        "Get your hands on the supreme Andrew Symonds NFTs from Jump.trade. Explore authentic signed cricket bat NFTs and cricket player NFTs here. Sign up now!",
      name: "Andrew Symonds",
      value: "andrew-symonds-nfts",
      checked: false,
    },
    "adam-gilchrist-nfts": {
      title: "ADAM GILCHRIST NFTs",
      description:
        "Adam Gilchrist has the distinction of having won all the World Cups he played. One of the best ever wicket keeping batsmen, he sparked many Aussie innings. Buy your Adam Gilchrist NFTs right now!",
      metaTitle:
        "Adam Gilchrist NFTs | Adam Gilchrist NFT Collection | Jump.Trade",
      metaDescription:
        "Be a keeper of your NFTs by owning the most-privileged Adam Gilchrist NFTs. Find some amazing digital bats signed by legendary players here. Sign up now!",
      name: "Adam Gilchrist",
      value: "adam-gilchrist-nfts",
      checked: false,
    },
    "glenn-mcgrath-nfts": {
      title: "GLENN MCGRATH NFTs",
      description:
        "Glenn McGrath, the spearhead of Aussie bowling was known for his perfection in line and length, and could stun any batsman with his deliveries. Buy your Glenn McGrath NFTs now!",
      metaTitle:
        "Glenn Mcgrath NFTs | Glenn Mcgrath NFT Collection | Jump.Trade",
      metaDescription:
        "Own a piece of the legacy of cricket by getting your hands on Glenn Mcgrath NFTs from Jump.trade. Access these super-exclusive cricket NFTs here. Sign up now!",
      name: "Glenn McGrath",
      value: "glenn-mcgrath-nfts",
      checked: false,
    },
    "darren-lehmann-nfts": {
      title: "DARREN LEHMANN NFTs",
      description:
        "This Australian all-rounder was a dependable lower middle order striker who saved the Aussie team from some of the most critical situations. Don't miss out on Darren Lehmann NFTs.",
      metaTitle:
        "Darren Lehmann NFTs | Darren Lehmann NFT Collection | Jump.Trade",
      metaDescription:
        "Own your first Darren Lehmann NFTs from Jump.trade NFT marketplace. Explore cricket player NFTs and authentic signed digital bat NFTs  here! Sign up now!",
      name: "Darren Lehmann",
      value: "darren-lehmann-nfts",
      checked: false,
    },
    "clive-lloyd-nfts": {
      title: "CLIVE LLOYD NFTs",
      description:
        "The person to hold the title of being the first-ever successful captain in limited overs led the mighty West Indies team to the first two World Cup. Get your hands on Clive Lloyd NFTs.",
      metaTitle: "Clive Lloyd NFTs | Clive Lloyd NFT Collection | Jump.Trade",
      metaDescription:
        "Your only cricket NFT marketplace to buy Clive Lloyd NFTs. Discover many more authentic cricket NFTs of legendary cricket players here! Sign up now!",
      name: "Clive Lloyd",
      value: "clive-lloyd-nfts",
      checked: false,
    },
    "michael-bevan-nfts": {
      title: "MICHAEL BEVAN NFTs",
      description:
        "Perhaps the first player to ever earn the 'finisher' tag in ODI cricket, Micheal Bevan bailed out Australia from the most impossible situations. Buy your Micheal Bevan NFTs on Jump.trade.",
      metaTitle:
        "Michael Bevan NFTs | Michael Bevan NFT Collection | Jump.Trade",
      metaDescription:
        "Owning Michael Bevan NFTs is a legacy to hold onto and be proud about. Explore authentic cricket player NFTs and digital signed bat NFTs on jump.trade. Sign up now!",
      name: "Michael Bevan",
      value: "michael-bevan-nfts",
      checked: false,
    },
    "damien-martyn-nfts": {
      title: "DAMIEN MARTYN NFTs",
      description:
        "An example of perseverance, Damien's elegant stroke production made him one of the most dependable Aussie batsmen on subcontinent pitches. Buy your Damien Martyn NFTs.",
      metaTitle:
        "Damien Martyn NFTs | Damien Martyn NFT Collection | Jump.Trade",
      metaDescription:
        "Own your first Damien Martyn NFTs on jump.trade NFT marketplace. Explore authentic signed cricket bat NFTs of legendary cricket players here. Sign up now!",
      name: "Damien Martyn",
      value: "damien-martyn-nfts",
      checked: false,
    },
    "2011-champions-nfts": {
      title: "2011 CHAMPIONS NFTs",
      description:
        "2011 marked India lifting the World Cup after 28 years with Dhoni's iconic sixer - one of the most momentous events! Don't miss out on owning a piece of this legacy with the 2011 World Cup NFTs.",
      metaTitle:
        "2011 Cricket World Cup NFT | World Cup Champions NFT | Jump.Trade",
      metaDescription:
        "Start your NFT collecting experience by owning one of the biggest moments in the history of Indian cricket. Lift this digital signed bat by the winners of 2011 world cup in style by signing up now!",
      name: "2011 CHAMPIONS",
      value: "2011-champions-nfts",
      checked: false,
    },
    "2003-champions-nfts": {
      title: "2003 CHAMPIONS & FINALISTS NFTs",
      description:
        "The 2003 World Cup finals is considered to be one of the biggest clashes in the history of the game with India facing Australia. Become a proud owner of the 2003 World Cup cricket NFTs.",
      metaTitle:
        "2003 Cricket World Cup NFT | Cricket World Cup Winner NFT| Jump.Trade",
      metaDescription:
        "Get your hands on the signed digital bats of the 2003 cricket worldcup finalists. Access this 2003 World cup champion NFT only on Jump.trade. Sign up now!",
      name: "2003 CHAMPIONS & FINALISTS",
      key: "2003 CHAMPIONS",
      value: "2003-champions-nfts",
      checked: false,
    },
    "1983-champions-nfts": {
      title: "1983 CHAMPIONS NFTs",
      description:
        "The 1983 Indian cricket team emerged from being the least expected to become the toppers of the league. You can now buy NFTs of this awesome cricket team on Jump.trade.",
      metaTitle:
        "1983 Cricket World Cup NFT |  World Cup Winner NFT | Jump.Trade",
      metaDescription:
        "Own the 1983 World Cup Champion NFTs and take pride in holding a piece of the legacy of this historical moment. Access many more exclusive cricket NFTs here. Sign up now!",
      name: "1983 CHAMPIONS",
      value: "1983-champions-nfts",
      checked: false,
    },
  };

  return config[page];
};

export const prebookStartDate = (date) => dayjs(date).format("DD-MM-YYYY");
export const prebookEndDate = (date) => dayjs(date).format("DD-MM-YYYY");

export const tournamentTime = (date) => dayjs(date).format("hh:mm a");

export const dateFormat = (date = null, format = "YYYY-MM-DD HH:mm:ss") => {
  if (!date) return null;
  var input_date = new Date(date);
  return dayjs(input_date).format(format);
};

export const decodeURIComponentSafe = (s) => {
  if (!s) {
    return s;
  }
  return decodeURIComponent(s.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25"));
};

export function debounceFactory(fn, delay = 1000) {
  let timer;
  return async (...args) => {
    console.log(timer);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export const getDecimalInfo = (value) => {
  const MIN_FIXED_PT = 1;
  const MAX_FIXED_PT = 6;

  let floatValue = parseFloat(value);
  if (!value || isNaN(floatValue)) return NaN;
  let decimalValue = floatValue.toString().split(".")[1];
  let ptsLength = decimalValue?.length;
  let fixedDecimalPts =
    ptsLength > MIN_FIXED_PT
      ? ptsLength <= 5
        ? ptsLength
        : MAX_FIXED_PT
      : MIN_FIXED_PT;

  return fixedDecimalPts;
};

export const dynamicDecimalPrecision = (value) => {
  let fixedDecimalPts = getDecimalInfo(value);
  return precisionRoundMod(value, fixedDecimalPts);
};

export const removeZeros = (num) => {
  return num.replace(/^0+/, "");
};

export const navigateToExternalLink = (url, target = "_self") => {
  const hideMenus = store.getState()?.user?.hideMenuStatus;
  let modifiedUrl = hideMenus ? `${url}&hideMenus=true` : url;
  window.open(modifiedUrl, target);
};

export const openWindowBlank = (url) => {
  window.open(url, "_blank");
};

export const openWindow = (url) => {
  window.open(url, "_self");
};

export const DEFAULT_REVENUE_SHARE = "(TBA)%";
export const validateUpi = (upi) => {
  const re = /^[\w\.\-_]{3,}@[a-zA-Z]{3,}/;
  return re.test(upi);
};

export const validateNumber = (value) => {
  const re = /^[1-9][0-9]*$/;
  return re.test(value);
};

export const raddx_level = (value) => {
  const TOTAL_LEVELS = 30;
  const levels = [];

  for (let i = 1; i <= TOTAL_LEVELS; i++) {
    levels.push({
      type: `${i}`,
      name: `LVL ${i}`,
      value: raddx_images[`level_${i}`],
    });
  }
  const levelData = levels.find((obj) => obj.type === value?.toString());
  return levelData;
};

export const raddx_car_category = (value) => {
  const car_categories = [
    {
      type: "Battle",
      name: "Battle",
      value: raddx_images.car_category_battle,
    },
    {
      type: "Concept",
      name: "Concept",
      value: raddx_images.car_category_concept,
    },
    {
      type: "Hyper",
      name: "Hyper",
      value: raddx_images.car_category_hyper,
    },
    {
      type: "Super",
      name: "Super",
      value: raddx_images.car_category_super,
    },
    {
      type: "Tuner",
      name: "Tuner",
      value: raddx_images.car_category_tuner,
    },
    {
      type: "Vintage",
      name: "Vintage",
      value: raddx_images.car_category_vintage,
    },
  ];

  const data = car_categories.find((obj) => obj.type === value?.toString());
  return data;
};

export const raddx_category = (value) => {
  const raddxCategory = [
    {
      name: "COMMON",
      value: "CO",
      color: "blue_color",
      textColor: "#3b56ff",
    },
    {
      name: "IMMORTAL",
      value: "IM",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      name: "RARE",
      value: "RA",
      color: "orange_color",
      textColor: "#f58220",
    },
    {
      name: "ALIEN",
      value: "AL",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      name: "LEGENDARY",
      value: "LG",
      color: "multi_color",
      textColor: "linear-gradient(202deg, #e2ff00, #18e0e0, #e8318d)",
    },
    // Land Categories
    {
      name: "HEART",
      value: "HT",
      color: "blue_color",
      textColor: "#3b56ff",
    },
    {
      name: "PRIME",
      value: "PM",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      name: "MAINLAND",
      value: "ML",
      color: "multi_color",
      textColor: "linear-gradient(202deg, #e2ff00, #18e0e0, #e8318d)",
    },
    {
      name: "DOWNTOWN",
      value: "DT",
      color: "orange_color",
      textColor: "#f58220",
    },

    //Building Categories
    {
      name: "PLATINUM",
      value: "PT",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      name: "DIAMOND",
      value: "DM",
      color: "multi_color",
      textColor: "linear-gradient(202deg, #e2ff00, #18e0e0, #e8318d)",
    },
    {
      name: "GOLD",
      value: "GO",
      color: "gold_color",
      textColor: "#cebd48",
    },
    {
      name: "SILVER",
      value: "SL",
      color: "blue_color",
      textColor: "#3b56ff",
    },
  ];

  const data = raddxCategory.find((obj) => obj.name === value);
  return data;
};

export const raddx_roles = (value) => {
  const raddxRoles = [
    {
      name: "Land",
      value: raddx_images.land_icon,
    },
    {
      name: "Building",
      value: raddx_images.building_icon,
    },
  ];

  const data = raddxRoles.find((obj) => obj.name === value);
  return data;
};

export const dateToSeconds = (date) => {
  const dateOption = new Date(date);
  const secondsConvertion = dateOption.getTime() / 1000;
  return secondsConvertion;
};

export const ValidateTelegramUsername = (name) => {
  const valid = /^@[a-zA-Z0-9]{5,}$/;
  return valid.test(name);
};

export const formValidateTelegram = (name) => {
  const re = /^[@a-zA-Z0-9]+$/u;
  return re.test(name);
};

export const ParamsSerialize = (params) => {
  // console.log(encodeURIComponent(JSON.stringify(params, "params")));
  // return encodeURIComponent(JSON.stringify(params).toString());
  const parts = [];
  const encode = (val) => {
    return encodeURIComponent(val)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  };
  const convertPart = (key, val) => {
    if (val instanceof Date) val = val.toISOString();
    else if (val instanceof Object) val = JSON.stringify(val);
    parts.push(encode(key) + "=" + encode(val));
  };
  Object.entries(params).forEach(([key, val]) => {
    if (val === null || typeof val === "undefined") return;
    if (Array.isArray(val))
      val.forEach((v, i) => convertPart(`${key}[${i}]`, v));
    else convertPart(key, val);
  });
  return parts.join("&");
};

export const getMetaDetails = (path) => {
  const metaDetails = [
    {
      pathName: "/",
      description:
        "Jump.trade is Asia's largest Web3 gaming ecosystem, giving you a holistic gaming experience with games, digital collectibles, & a vast NFT marketplace!",
      title: "Asia's Largest Web3 Gaming Ecosystem",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/Asia_Largest_Web3_Gaming_Ecosystem_OG_Img.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/nft-marketplace/mcl",
      description:
        "Own, sell, and trade the fabulous Cricket NFTs on this thriving marketplace. Add some cricket magic to your gaming collections.",
      title: "Explore MCL Cricket NFTs | Cricket NFT Marketplace | Jump.trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/Asia_Largest_Web3_Gaming_Ecosystem_OG_Img.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/nft-marketplace/raddx",
      description:
        "Embrace the thrill of car racing with our stunning RaddX Car NFTs. The array of cars, lands, and buildings is your road to RaddX Racing Metaverse.",
      title: "Explore Raddx Car NFTs | Car NFT Collection | Jump.trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/Asia_Largest_Web3_Gaming_Ecosystem_OG_Img.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/nft-marketplace/hurley",
      description:
        "Embrace the thrill of car racing with our stunning RaddX Car NFTs. The array of cars, lands, and buildings is your road to RaddX Racing Metaverse.",
      title: "Explore Hurley  NFTs | Hurley NFT Collection | Jump.trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/Asia_Largest_Web3_Gaming_Ecosystem_OG_Img.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/tournaments",
      description:
        "Explore the schedule of our upcoming play-to-earn NFT game tournaments. Step into the arena, showcase your gaming prowess, and claim your share of the rewards in the exciting realm of gaming. Get ready for the thrill!",
      title:
        "Jump.trade NFT Game Tournament Schedule: Play, Compete, and Earn Rewards",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/Asia_Largest_Web3_Gaming_Ecosystem_OG_Img.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/nft-marketplace/live-auction",
      description:
        "Jump.trade is Asia's largest Web3 gaming ecosystem, giving you a holistic gaming experience with games, digital collectibles, & a vast NFT marketplace!",
      title: "Live Auction | Jump.Trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/Asia_Largest_Web3_Gaming_Ecosystem_OG_Img.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/drop/free-mcl-mega-pass",
      description:
        "Claim your FREE Mega Pass to enter and play the $25000 worth of Aptos Tokens MCL Mega Play Tournamen with 100% Winners! Only 25000 Passes are available. Hurry now!",
      title:
        "MCL Mega Play Tournament Pass | Claim Mega Pass For FREE | Jump.trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/drop/MegaPlayPass_Img_1.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/drop/mcl-founder-pass",
      description:
        "Experience unrivaled prestige with the all new MCL Founder Pass. Unlock extraordinary privileges, elevate your status, and indulge in the crest of ownership within the esteemed MCL community. Get your today for limitless opportunities.",
      title:
        "MCL Elite Founder Pass - Unlock Unrivaled Prestige and Limitless Opportunities | Jump.trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/MCLFounderPass_OG_Image.jpg",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/drop/mcl-fusor-nfts",
      description:
        "Buy The MCL Fusor NFTs to Create Three New NFTs from Two Existing MCL NFTs. MCL Premium Player NFTs, Special Shots NFTs & Fielding Action NFT!",
      title: "MCL Fusor NFTs | MCL Premium Player NFTs | Jump.trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/Fusor_NFT_OG_Image.jpg",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/drop/mcl-shot-nfts",
      description:
        "The MCL Signature Shot NFTs are motion-captured batting shots that are tradeable, collectible, and playable. Buy your MCL Signature Shots — Mystery Box today!",
      title: "MCL Signature Shots — Mystery Box | Jump.trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/MCL-Action-Shots-banner-with-padding.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/drop/crypto-bat-nfts",
      description:
        "Jump.trade presents an exclusive collection of playable crypto cricket bat NFTs with tradable crypto assets embedded. Buy cricket bat NFTs now!",
      title: "Crypto Bat NFT Drop | Buy Cricket Bat NFTs | Jump.trade",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/Crypto_bat_OG_Image.jpg",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/drop/mcl-ball-nfts",
      description:
        "Explore a world of exclusive Ball NFTs and digital collectibles on Jump.trade. Dive into the exciting realm of Gaming digital assets and Get your favorite Ball NFTs today",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/drops/mclballnft_og.png",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
    {
      pathName: "/drop/tornado/tornado-pass",
      description:
        "Claim your FREE Tornado Master NFTs now! Enjoy exclusive perks such as energy boosts, coin multipliers, defenses, and discounted buildings. Seize yours today and reign over the storm!",
      title:
        "Tornado Master NFTs - Unleash the Storm with Jump Trade | Claim Your FREE Tornado Master NFT",
      image:
        "https://cdn.guardianlink.io/product-hotspot/images/jumptrade/tornado-master-landscape-1280720.webp",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },

    {
      pathName: "/drop/rss/rss-pass",
      description:
        "Claim your FREE Racing Super Stars NFTs now! Enjoy exclusive cars in your garage and access to the game. Seize yours today and reign over the ultimate stars!",
      title:
        "Racing Super Stars NFTs - Race to Become a Star with Jump Trade | Claim Your FREE Racing Super Stars NFT",
      image: "https://cdn.jump.trade/raddx/OGimage_racing.jpg",
      canonical: process.env.NEXT_PUBLIC_MARKETPLACE_URL,
    },
  ];

  const finalData = metaDetails?.find((data) => data?.pathName === path);
  return finalData;
};

export const buyButtonDisableStatus = true;

export const noInternet =
  "data:image/webp;base64,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";
