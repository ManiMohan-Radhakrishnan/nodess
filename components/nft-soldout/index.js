import style from "./style.module.scss";

const NFTSold = ({}) => {
  return (
    <>
      <section className={style["verifier-info-block"]}>
        <div
          className={`${style["verifier-info-wrapper"]} ${style["disconnect"]}`}
        >
          <div className={style["disconnecting"]}>
            <div className="icon-lock">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="96"
                viewBox="0 0 89 96"
                fill="none"
              >
                <path
                  d="M46.6455 95.9998H42.3527C41.5625 95.9998 40.9219 95.4903 40.9219 94.8616V60.9998H48.0763V94.8616C48.0763 95.4903 47.4358 95.9998 46.6455 95.9998Z"
                  fill="#A3A3A3"
                ></path>
                <path
                  d="M40.9219 59.2293H48.0763V66.7236H40.9219V59.2293Z"
                  fill="#949494"
                ></path>
                <path
                  d="M81.3455 60.9992H7.65447C3.70323 60.9992 0.5 57.796 0.5 53.8447V24.1537C0.5 20.2024 3.70323 16.9992 7.65447 16.9992H81.3455C85.2968 16.9992 88.5 20.2024 88.5 24.1537V53.8447C88.5 57.796 85.2968 60.9992 81.3455 60.9992Z"
                  fill="#ED756E"
                ></path>
                <path
                  d="M81.3446 56.5653H7.65352C6.15373 56.5653 4.93359 55.345 4.93359 53.8454V24.1543C4.93359 22.6545 6.15391 21.4344 7.65352 21.4344H81.3446C82.8444 21.4344 84.0645 22.6547 84.0645 24.1543V53.8454C84.0645 55.3452 82.8444 56.5653 81.3446 56.5653ZM7.65352 24.0125C7.57669 24.0125 7.51172 24.0775 7.51172 24.1543V53.8454C7.51172 53.9222 7.57669 53.9872 7.65352 53.9872H81.3446C81.4214 53.9872 81.4864 53.9222 81.4864 53.8454V24.1543C81.4864 24.0775 81.4214 24.0125 81.3446 24.0125H7.65352Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.0781 39.1713C27.0781 38.5463 26.9999 37.9473 26.8437 37.3744C26.6874 36.7911 26.4739 36.2963 26.2031 35.89C25.9426 35.515 25.6301 35.2338 25.2656 35.0463C24.901 34.8483 24.5364 34.7494 24.1718 34.7494C23.8072 34.7494 23.4374 34.8483 23.0624 35.0463C22.6978 35.2338 22.3906 35.515 22.1406 35.89C21.8593 36.2963 21.6406 36.7911 21.4843 37.3744C21.3281 37.9473 21.2499 38.5463 21.2499 39.1713C21.2499 39.7963 21.3281 40.3952 21.4843 40.9681C21.6406 41.5306 21.8593 42.015 22.1406 42.4213C22.3906 42.8067 22.6978 43.0931 23.0624 43.2806C23.4374 43.4681 23.8072 43.5619 24.1718 43.5619C24.5364 43.5619 24.901 43.4681 25.2656 43.2806C25.6301 43.0931 25.9426 42.8067 26.2031 42.4213C26.4739 42.015 26.6874 41.5306 26.8437 40.9681C26.9999 40.3952 27.0781 39.7963 27.0781 39.1713ZM29.1093 39.1713C29.1093 40.0046 28.9947 40.8067 28.7656 41.5775C28.5468 42.3483 28.2187 43.0098 27.7812 43.5619C27.3437 44.1244 26.802 44.5567 26.1562 44.8588C25.5208 45.1608 24.8593 45.3119 24.1718 45.3119C23.4739 45.3119 22.802 45.1608 22.1562 44.8588C21.5208 44.5567 20.9843 44.1244 20.5468 43.5619C20.1093 43.0098 19.776 42.3483 19.5468 41.5775C19.3281 40.8067 19.2187 40.0046 19.2187 39.1713C19.2187 38.3379 19.3281 37.5358 19.5468 36.765C19.776 35.9942 20.1093 35.3275 20.5468 34.765C20.9843 34.2129 21.5208 33.7806 22.1562 33.4681C22.802 33.1556 23.4739 32.9994 24.1718 32.9994C24.8593 32.9994 25.5208 33.1556 26.1562 33.4681C26.802 33.7806 27.3437 34.2129 27.7812 34.765C28.2187 35.3275 28.5468 35.9942 28.7656 36.765C28.9947 37.5358 29.1093 38.3379 29.1093 39.1713ZM58.5312 37.3744C58.6874 37.9473 58.7655 38.5463 58.7655 39.1713C58.7655 39.7963 58.6874 40.3952 58.5312 40.9681C58.3749 41.5306 58.1614 42.015 57.8905 42.4213C57.6301 42.8067 57.3176 43.0931 56.953 43.2806C56.5884 43.4681 56.2239 43.5619 55.8593 43.5619C55.4947 43.5619 55.1249 43.4681 54.7499 43.2806C54.3853 43.0931 54.078 42.8067 53.828 42.4213C53.5468 42.015 53.328 41.5306 53.1718 40.9681C53.0155 40.3952 52.9374 39.7963 52.9374 39.1713C52.9374 38.5463 53.0155 37.9473 53.1718 37.3744C53.328 36.7911 53.5468 36.2963 53.828 35.89C54.078 35.515 54.3853 35.2338 54.7499 35.0463C55.1249 34.8483 55.4947 34.7494 55.8593 34.7494C56.2239 34.7494 56.5884 34.8483 56.953 35.0463C57.3176 35.2338 57.6301 35.515 57.8905 35.89C58.1614 36.2963 58.3749 36.7911 58.5312 37.3744ZM60.453 41.5775C60.6822 40.8067 60.7968 40.0046 60.7968 39.1713C60.7968 38.3379 60.6822 37.5358 60.453 36.765C60.2343 35.9942 59.9062 35.3275 59.4687 34.765C59.0312 34.2129 58.4895 33.7806 57.8437 33.4681C57.2082 33.1556 56.5468 32.9994 55.8593 32.9994C55.1614 32.9994 54.4895 33.1556 53.8437 33.4681C53.2082 33.7806 52.6718 34.2129 52.2343 34.765C51.7968 35.3275 51.4634 35.9942 51.2343 36.765C51.0155 37.5358 50.9062 38.3379 50.9062 39.1713C50.9062 40.0046 51.0155 40.8067 51.2343 41.5775C51.4634 42.3483 51.7968 43.0098 52.2343 43.5619C52.6718 44.1244 53.2082 44.5567 53.8437 44.8588C54.4895 45.1608 55.1614 45.3119 55.8593 45.3119C56.5468 45.3119 57.2082 45.1608 57.8437 44.8588C58.4895 44.5567 59.0312 44.1244 59.4687 43.5619C59.9062 43.0098 60.2343 42.3483 60.453 41.5775ZM65.8125 43.5C66.1666 43.5208 66.4739 43.4531 66.7343 43.2969C66.9947 43.1406 67.1979 42.9375 67.3437 42.6875C67.5104 42.375 67.6302 42.0416 67.7031 41.6875C67.7864 41.3229 67.8281 40.9219 67.8281 40.4844V33.2031H69.8437V40.6094C69.8437 41.0989 69.7968 41.6146 69.7031 42.1562C69.6197 42.6979 69.427 43.1979 69.125 43.6562C68.8333 44.125 68.4166 44.5208 67.875 44.8437C67.3333 45.1562 66.6458 45.3125 65.8125 45.3125C64.9791 45.3125 64.2916 45.1562 63.75 44.8437C63.2083 44.5208 62.7916 44.125 62.5 43.6562C62.1979 43.1979 62.0052 42.6979 61.9218 42.1562C61.8385 41.6041 61.7968 41.0885 61.7968 40.6094V33.2031H63.8125V40.4844C63.8125 40.9219 63.8489 41.3229 63.9218 41.6875C63.9947 42.0416 64.1145 42.375 64.2812 42.6875C64.427 42.9375 64.625 43.1354 64.875 43.2812C65.1354 43.4271 65.4479 43.5 65.8125 43.5ZM78.9218 35.0156H75.7968V45.125H73.7812V35.0156H70.6562V33.2031H78.9218V35.0156ZM39.3124 35.0156V43.3281H40.1249C40.2811 43.3281 40.4999 43.3229 40.7811 43.3125C41.0728 43.2916 41.2968 43.2552 41.453 43.2031C41.6509 43.151 41.8645 43.0364 42.0936 42.8594C42.3332 42.6823 42.5624 42.4323 42.7811 42.1094C42.9999 41.776 43.177 41.375 43.3124 40.9062C43.4582 40.4271 43.5311 39.8541 43.5311 39.1875C43.5311 38.5 43.4582 37.9219 43.3124 37.4531C43.177 36.9844 42.9999 36.5833 42.7811 36.25C42.5624 35.9271 42.3332 35.6771 42.0936 35.5C41.8645 35.3125 41.6509 35.1927 41.453 35.1406C41.2968 35.0989 41.0728 35.0677 40.7811 35.0469C40.4999 35.026 40.2811 35.0156 40.1249 35.0156H39.3124ZM37.3124 33.2031H39.9999C40.3436 33.2031 40.703 33.2291 41.078 33.2812C41.4634 33.3229 41.802 33.375 42.0936 33.4375C42.5832 33.5729 43.0311 33.8021 43.4374 34.125C43.854 34.4375 44.2186 34.8281 44.5311 35.2969C44.8436 35.7448 45.0884 36.2969 45.2655 36.9531C45.453 37.5989 45.5468 38.3437 45.5468 39.1875C45.5468 40.0104 45.453 40.75 45.2655 41.4062C45.0884 42.0625 44.8436 42.6146 44.5311 43.0625C44.2186 43.5312 43.854 43.9271 43.4374 44.25C43.0311 44.5625 42.5832 44.7864 42.0936 44.9219C41.802 44.9844 41.4634 45.0364 41.078 45.0781C40.703 45.1094 40.3436 45.125 39.9999 45.125H37.3124V33.2031ZM30.1094 45.125H36.7187V43.3281H32.125V33.2031H30.1094V45.125ZM17.7187 44.4371C18.4687 43.8538 18.8437 42.9579 18.8437 41.7496C18.8229 41.2183 18.7292 40.7756 18.5625 40.4215C18.4062 40.0673 18.1875 39.76 17.9062 39.4996C17.6562 39.26 17.3385 39.0204 16.9531 38.7808C16.5781 38.5308 16.026 38.2079 15.2969 37.8121C15.0677 37.6975 14.8594 37.5777 14.6719 37.4527C14.4948 37.3277 14.3385 37.1871 14.2031 37.0308C14.0677 36.8954 13.9531 36.76 13.8594 36.6246C13.7656 36.4892 13.7187 36.3329 13.7187 36.1558C13.7187 35.7079 13.8646 35.3642 14.1562 35.1246C14.4583 34.8746 14.8281 34.7496 15.2656 34.7496C15.6823 34.7496 16.1302 34.8173 16.6094 34.9527C17.099 35.0881 17.625 35.3017 18.1875 35.5933V33.6246C17.7187 33.4683 17.2865 33.3329 16.8906 33.2183C16.6719 33.1663 16.4271 33.1194 16.1562 33.0777C15.8854 33.0256 15.6146 32.9996 15.3437 32.9996C14.2708 32.9996 13.3958 33.2652 12.7187 33.7965C12.0417 34.3277 11.7031 35.1506 11.7031 36.2652C11.7031 36.7444 11.8125 37.1767 12.0312 37.5621C12.25 37.9475 12.5365 38.2808 12.8906 38.5621C13.224 38.8329 13.5781 39.0777 13.9531 39.2965C14.3281 39.5048 14.6667 39.6923 14.9687 39.859C15.4062 40.0881 15.8125 40.3642 16.1875 40.6871C16.3437 40.8329 16.4844 41.01 16.6094 41.2183C16.7344 41.4163 16.7969 41.6663 16.7969 41.9683C16.7969 42.2704 16.7292 42.5204 16.5937 42.7183C16.4583 42.9163 16.3073 43.0673 16.1406 43.1715C15.9635 43.3173 15.7604 43.411 15.5312 43.4527C15.3125 43.4944 15.0729 43.5152 14.8125 43.5152C14.5729 43.5152 14.3229 43.4892 14.0625 43.4371C13.8021 43.385 13.5573 43.3277 13.3281 43.2652C12.9219 43.1402 12.4115 42.9527 11.7969 42.7027V44.7496C12.2135 44.8954 12.6771 45.0256 13.1875 45.1402C13.7083 45.2548 14.2083 45.3121 14.6875 45.3121C15.9583 45.3121 16.9687 45.0204 17.7187 44.4371Z"
                  fill="white"
                ></path>
                <path
                  d="M31.635 12.9965C31.2161 12.9965 30.7955 12.8517 30.4542 12.5558L27.1229 9.66926C26.3697 9.0166 26.2881 7.877 26.9408 7.12383C27.5932 6.37065 28.7328 6.2891 29.4862 6.94176L32.8175 9.82833C33.5707 10.481 33.6523 11.6206 32.9996 12.3738C32.6426 12.7856 32.1402 12.9965 31.635 12.9965Z"
                  fill="#ADADAD"
                ></path>
                <path
                  d="M39.6524 7.83912C38.8722 7.83912 38.1527 7.32918 37.9218 6.54258L36.68 2.31324C36.3993 1.35713 36.9467 0.35432 37.903 0.0736279C38.8589 -0.207301 39.862 0.340333 40.1426 1.29668L41.3844 5.52602C41.6651 6.48213 41.1177 7.48493 40.1614 7.76563C39.9919 7.81541 39.8207 7.83912 39.6524 7.83912Z"
                  fill="#ADADAD"
                ></path>
                <path
                  d="M49.2013 7.83912C49.033 7.83912 48.8618 7.81541 48.6921 7.76563C47.7358 7.48493 47.1884 6.48213 47.4691 5.52602L48.7108 1.29668C48.9915 0.340333 49.9948 -0.207301 50.9504 0.0736279C51.9068 0.35432 52.4542 1.35713 52.1735 2.31324L50.9317 6.54258C50.701 7.32894 49.9815 7.83912 49.2013 7.83912Z"
                  fill="#ADADAD"
                ></path>
                <path
                  d="M57.2414 12.9965C56.7362 12.9965 56.2336 12.7855 55.8768 12.3737C55.2242 11.6205 55.3057 10.4809 56.0589 9.82825L59.3902 6.94168C60.1439 6.28902 61.2832 6.37081 61.9356 7.12375C62.5883 7.87692 62.5067 9.01652 61.7536 9.66918L58.4222 12.5557C58.0811 12.8516 57.6603 12.9965 57.2414 12.9965Z"
                  fill="#ADADAD"
                ></path>
              </svg>
            </div>
            <h5>The Node sale has ended</h5>
            <span>Node has been sold out</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTSold;
