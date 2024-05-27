import Image, { StaticImageData } from "next/image";

import ImgCard01 from "/public/img-card-01.png";

type CardProps = {
  data: {
    title: string;
    description: string;
    img: StaticImageData;
  };
};

const Card = ({ data }: CardProps) => {
  const { description, img, title } = data;
  return (
    <div className="border border-[#FCC26B] rounded-[20px]">
      <div className="max-w-[370px] h-[444px] p-5  flex flex-col items-center justify-center bg-[#eeee] border border-[#D9D9D9] rounded-[20px] m-1 relative">
        <Image
          src={img}
          width={193}
          height={267}
          alt=""
          className="absolute -top-[130px]"
          quality={100}
        />
        <div className="flex flex-col items-center mt-40">
          <h3 className="font-road text-[40px] text-primary">{title}</h3>
          <p className="text-center  text-[#5d5d5d] text-sm">{description}</p>
          <div className="flex gap-5 pt-10">
            <div className="bg-secondary w-[44px] h-[44px] flex items-center justify-center rounded-full">
              <svg
                width="13"
                height="24"
                viewBox="0 0 13 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0525 16.1523C10.0525 15.7861 9.98743 15.4484 9.85723 15.1392C9.73516 14.8218 9.53577 14.5288 9.25908 14.2603C8.98239 13.9917 8.62432 13.7435 8.18486 13.5156C7.74541 13.2796 7.22458 13.064 6.62236 12.8687C5.86553 12.6326 5.18193 12.36 4.57158 12.0508C3.96123 11.7415 3.4404 11.3713 3.00908 10.9399C2.56963 10.5168 2.2319 10.0285 1.9959 9.4751C1.7599 8.92171 1.64189 8.28288 1.64189 7.55859C1.64189 6.875 1.74362 6.25651 1.94707 5.70312C2.15866 5.14974 2.4557 4.66553 2.83818 4.25049C3.21253 3.84359 3.66826 3.514 4.20537 3.26172C4.75062 3.00944 5.35283 2.84261 6.01201 2.76123V0.0756836H7.83086V2.76123C8.42493 2.84261 8.96611 3.0013 9.45439 3.2373C9.94268 3.46517 10.3659 3.76221 10.7239 4.12842C11.1878 4.6167 11.5418 5.22298 11.7859 5.94727C12.0301 6.66341 12.1562 7.48942 12.1644 8.42529H9.91826C9.91826 7.88005 9.84909 7.37956 9.71074 6.92383C9.58053 6.45996 9.38929 6.0612 9.13701 5.72754C8.87659 5.40202 8.55921 5.14567 8.18486 4.9585C7.81051 4.77132 7.38327 4.67773 6.90312 4.67773C6.38229 4.67773 5.92656 4.75098 5.53594 4.89746C5.15345 5.04395 4.84014 5.25146 4.596 5.52002C4.36813 5.76416 4.19316 6.05713 4.07109 6.39893C3.95716 6.73258 3.9002 7.10693 3.9002 7.52197C3.9002 7.92887 3.9653 8.29102 4.09551 8.6084C4.22572 8.92578 4.43324 9.21468 4.71807 9.4751C4.99476 9.73551 5.35283 9.97965 5.79228 10.2075C6.23988 10.4272 6.77699 10.6429 7.40361 10.8545C8.16859 11.1068 8.85625 11.3875 9.4666 11.6968C10.077 12.006 10.5937 12.3682 11.0169 12.7832C11.4401 13.1982 11.7615 13.6784 11.9812 14.2236C12.2091 14.7689 12.323 15.4036 12.323 16.1279C12.323 16.8359 12.2091 17.4707 11.9812 18.0322C11.7615 18.5938 11.4482 19.0739 11.0413 19.4727C10.6344 19.8796 10.138 20.2051 9.55205 20.4492C8.97425 20.6934 8.33135 20.8521 7.62334 20.9253V23.269H5.80449V20.9375C5.16973 20.8724 4.55937 20.7259 3.97344 20.498C3.39564 20.2702 2.88294 19.9365 2.43535 19.4971C1.98776 19.0658 1.62969 18.5205 1.36113 17.8613C1.09258 17.2021 0.958301 16.4128 0.958301 15.4932H3.2166C3.2166 16.1768 3.31833 16.7464 3.52178 17.2021C3.72523 17.6497 3.98971 18.0078 4.31523 18.2764C4.63262 18.5449 4.99476 18.7362 5.40166 18.8501C5.80856 18.964 6.21953 19.021 6.63457 19.021C7.16354 19.021 7.63962 18.9559 8.06279 18.8257C8.48597 18.6955 8.84404 18.5042 9.13701 18.252C9.42998 18.0078 9.65378 17.7108 9.8084 17.3608C9.97116 17.0028 10.0525 16.5999 10.0525 16.1523Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="bg-secondary w-[44px] h-[44px] flex items-center justify-center rounded-full">
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7069 3.92412L13.7078 3.92303L16.0239 1.20805C16.0241 1.20786 16.0243 1.20766 16.0244 1.20746C16.0746 1.14926 16.1987 1.05123 16.3847 0.966632C16.5703 0.882264 16.7323 0.85 16.821 0.85H20.2099C20.3134 0.85 20.495 0.883651 20.7021 0.965972C20.9098 1.04853 21.06 1.14697 21.1288 1.21256C21.1289 1.21264 21.1289 1.21271 21.129 1.21279L23.7924 3.76628C23.86 3.83113 23.9592 3.97041 24.0418 4.16151C24.125 4.3538 24.1553 4.51492 24.1553 4.59692V9.76618C24.1553 9.82036 24.13 9.9489 24.0452 10.107C23.9612 10.2637 23.8641 10.3647 23.8071 10.4037L23.8063 10.4043L12.7375 18.017L12.7371 18.0173C12.7098 18.036 12.6275 18.0711 12.502 18.0711C12.3764 18.0711 12.2946 18.036 12.268 18.0177L12.267 18.017L1.19819 10.4043L1.19608 10.4029C1.13953 10.3642 1.04313 10.2642 0.959605 10.1079C0.875431 9.95048 0.849954 9.82152 0.849954 9.76618V4.59692C0.849954 4.5149 0.880284 4.35374 0.963446 4.16132C1.04591 3.9705 1.14483 3.83122 1.21232 3.76611C1.21246 3.76597 1.2126 3.76583 1.21274 3.7657L3.87545 1.21279C3.87558 1.21267 3.87571 1.21255 3.87584 1.21242C3.94478 1.14671 4.09487 1.04838 4.30221 0.96597C4.50904 0.883758 4.69086 0.85 4.79531 0.85H8.18416C8.27179 0.85 8.43365 0.882129 8.61946 0.966623C8.80588 1.05139 8.93004 1.14952 8.98001 1.20755C8.98014 1.2077 8.98027 1.20786 8.9804 1.20801L11.2965 3.92303L11.2968 3.92331C11.9441 4.68141 13.0598 4.68013 13.7069 3.92412Z"
                  stroke="#242424"
                  stroke-width="1.7"
                />
              </svg>
            </div>
            <div className="bg-secondary w-[44px] h-[44px] flex items-center justify-center rounded-full">
              <svg
                width="14"
                height="21"
                viewBox="0 0 14 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.17629 10.5956C4.53078 10.5956 2.37838 8.44343 2.37838 5.79791C2.37838 3.15219 4.53078 1 7.17629 1C9.82181 1 11.974 3.15219 11.974 5.79791C11.974 8.44343 9.82181 10.5956 7.17629 10.5956ZM7.17629 1.61293C4.86875 1.61293 2.99131 3.49016 2.99131 5.79791C2.99131 8.10546 4.86854 9.98269 7.17629 9.98269C9.48384 9.98269 11.3611 8.10546 11.3611 5.79791C11.3611 3.49016 9.48384 1.61293 7.17629 1.61293Z"
                  fill="black"
                  stroke="#242424"
                />
                <path
                  d="M13.1963 19.5927H1.30657C1.13717 19.5927 1 19.4556 1 19.2862V16.1767C1 13.5871 3.10695 11.48 5.69648 11.48H8.80599C11.3955 11.48 13.5027 13.5869 13.5027 16.1767V19.2862C13.5027 19.4556 13.3655 19.5927 13.1963 19.5927ZM1.61314 18.9798H12.8899V16.1767C12.8899 13.9249 11.0582 12.0929 8.80619 12.0929H5.69669C3.44492 12.0929 1.61314 13.9247 1.61314 16.1767V18.9798Z"
                  fill="black"
                  stroke="#242424"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
