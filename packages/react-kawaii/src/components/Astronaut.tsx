import { FunctionComponent } from 'react';
import { DEFAULT_PROPS } from '../constants';
import { KawaiiProps } from '../types';
import { getFaceScale } from '../utils/getFaceScale';
import { Face } from './common/face';

export const Astronaut: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(40.5);
  const figmaFaceXYPosition = '99.82 67.77';

  return (
    <svg width={size} height={size} viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.9407 156.016C46.3921 155.817 45.6607 155.551 45.1785 155.168L43.8528 163.362C43.5709 164.706 44.5853 165.902 45.7489 166.118C47.0953 166.402 48.2916 165.391 48.3242 164.164L49.5672 156.766C48.8357 156.5 47.855 156.349 46.9407 156.016Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.3877 164.61C31.5706 164.676 31.5706 164.676 31.7534 164.743C32.8506 165.142 34.0305 164.745 34.6117 163.717C36.8703 159.788 40.1596 156.44 44.3969 154.471C43.1332 153.391 42.4344 151.897 42.1677 150.354C37.3655 152.738 33.1956 156.798 30.4222 161.573C29.9074 162.418 30.2405 163.779 31.3877 164.61Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.6732 129.112L85.2967 111.514L89.4873 115.931L73.2563 131.508L66.6732 129.112Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.2623 145.086L54.4173 150.268C57.477 153.241 62.3468 152.947 65.0211 149.582L73.6917 138.277C75.7347 135.509 75.5333 131.511 73.0723 129.169L70.7941 126.894C68.3995 124.369 64.3439 124.133 61.7022 126.27L50.2712 134.918C46.5824 137.087 46.2026 142.113 49.2623 145.086Z"
        fill={color}
      />
      <path
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.2623 145.086L54.4173 150.268C57.477 153.241 62.3468 152.947 65.0211 149.582L73.6917 138.277C75.7347 135.509 75.5333 131.511 73.0723 129.169L70.7941 126.894C68.3995 124.369 64.3439 124.133 61.7022 126.27L50.2712 134.918C46.5824 137.087 46.2026 142.113 49.2623 145.086Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.9407 156.016C50.7784 157.413 55.0191 155.442 56.4125 151.614C57.8059 147.785 55.8244 143.549 51.9867 142.153C48.149 140.756 43.9083 142.727 42.5149 146.555C41.1215 150.384 43.103 154.62 46.9407 156.016Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M192.036 156.016C192.584 155.817 193.316 155.551 193.798 155.168L195.123 163.362C195.405 164.706 194.391 165.902 193.227 166.118C191.881 166.402 190.685 165.391 190.652 164.164L189.409 156.766C190.141 156.5 191.121 156.349 192.036 156.016Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M207.589 164.61C207.406 164.676 207.406 164.676 207.223 164.743C206.126 165.142 204.946 164.745 204.365 163.717C202.106 159.788 198.817 156.44 194.579 154.471C195.843 153.391 196.542 151.897 196.809 150.354C201.611 152.738 205.781 156.798 208.554 161.573C209.069 162.418 208.736 163.779 207.589 164.61Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.303 129.112L153.68 111.514L149.489 115.931L165.72 131.508L172.303 129.112Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189.714 145.086L184.559 150.268C181.499 153.241 176.629 152.947 173.955 149.582L165.285 138.277C163.242 135.509 163.443 131.511 165.904 129.169L168.182 126.894C170.577 124.369 174.632 124.133 177.274 126.27L188.705 134.918C192.394 137.087 192.774 142.113 189.714 145.086Z"
        fill={color}
      />
      <path
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189.714 145.086L184.559 150.268C181.499 153.241 176.629 152.947 173.955 149.582L165.285 138.277C163.242 135.509 163.443 131.511 165.904 129.169L168.182 126.894C170.577 124.369 174.632 124.133 177.274 126.27L188.705 134.918C192.394 137.087 192.774 142.113 189.714 145.086Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M192.036 156.016C188.198 157.413 183.957 155.442 182.564 151.614C181.17 147.785 183.152 143.549 186.99 142.153C190.827 140.756 195.068 142.727 196.461 146.555C197.855 150.384 195.873 154.62 192.036 156.016Z"
        fill={color}
      />
      <rect x={134.854} y={169.797} width={6.82929} height={35.8538} fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M151.131 217.375C150.448 206.676 144.984 198.253 138.155 198.253C131.326 198.253 125.635 206.676 125.179 217.375H151.131Z"
        fill={color}
      />
      <path
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M151.131 217.375C150.448 206.676 144.984 198.253 138.155 198.253C131.326 198.253 125.635 206.676 125.179 217.375H151.131Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M150.675 217.033H125.407C123.358 217.033 121.765 218.627 121.765 220.676V220.676C121.765 222.724 123.358 224.318 125.407 224.318H150.675C152.724 224.318 154.318 222.724 154.318 220.676V220.676C154.09 218.627 152.496 217.033 150.675 217.033Z"
        fill={color}
      />
      <rect x={97.2929} y={169.797} width={6.82929} height={35.8538} fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M113.569 217.375C112.886 206.676 107.423 198.253 100.594 198.253C93.7645 198.253 88.0734 206.676 87.6181 217.375H113.569Z"
        fill={color}
      />
      <path
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M113.569 217.375C112.886 206.676 107.423 198.253 100.594 198.253C93.7645 198.253 88.0734 206.676 87.6181 217.375H113.569Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M113.114 217.033H87.8458C85.797 217.033 84.2035 218.627 84.2035 220.676V220.676C84.2035 222.724 85.797 224.318 87.8458 224.318H113.114C115.163 224.318 116.756 222.724 116.756 220.676V220.676C116.756 218.627 115.163 217.033 113.114 217.033Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M120.028 186.87C119.667 186.871 119.307 186.871 118.947 186.87C106.604 186.828 95.1682 181.213 87.5715 171.466C79.9266 161.657 77.2779 149.122 80.3064 137.077L91.8232 91.2614C99.946 96.0278 109.401 98.7661 119.487 98.7661C129.574 98.7661 139.031 96.0274 147.154 91.2604L158.67 137.078C161.698 149.123 159.05 161.657 151.404 171.466C143.808 181.213 132.371 186.827 120.028 186.87Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M165.751 23.5154L141.605 59.5874L138.763 57.7041L162.909 21.6321L165.751 23.5154Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.5085 21.8504L100.654 57.9225L97.8126 59.8058L73.6668 23.7338L76.5085 21.8504Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164.351 30.0889C168.437 30.0889 171.749 26.7765 171.749 22.6905C171.749 18.6044 168.437 15.2921 164.351 15.2921C160.266 15.2921 156.954 18.6044 156.954 22.6905C156.954 26.7765 160.266 30.0889 164.351 30.0889Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.194 30.0889C79.2794 30.0889 82.5913 26.7765 82.5913 22.6905C82.5913 18.6044 79.2794 15.2921 75.194 15.2921C71.1086 15.2921 67.7967 18.6044 67.7967 22.6905C67.7967 26.7765 71.1086 30.0889 75.194 30.0889Z"
        fill={color}
      />
      <path
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164.351 30.0889C168.437 30.0889 171.749 26.7765 171.749 22.6905C171.749 18.6044 168.437 15.2921 164.351 15.2921C160.266 15.2921 156.954 18.6044 156.954 22.6905C156.954 26.7765 160.266 30.0889 164.351 30.0889Z"
        fill="black"
      />
      <path
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.194 30.0889C79.2794 30.0889 82.5913 26.7765 82.5913 22.6905C82.5913 18.6044 79.2794 15.2921 75.194 15.2921C71.1086 15.2921 67.7967 18.6044 67.7967 22.6905C67.7967 26.7765 71.1086 30.0889 75.194 30.0889Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.773 125.879C148.048 125.879 170.97 102.954 170.97 74.674C170.97 46.3944 148.048 23.4692 119.773 23.4692C91.4972 23.4692 68.5753 46.3944 68.5753 74.674C68.5753 102.954 91.4972 125.879 119.773 125.879Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.986 98.1114C153.293 98.1114 153.293 91.1804 153.293 74.9363C153.293 58.6922 146.288 53.0873 119.986 53.0873C93.6844 53.0873 86.6793 58.6922 86.6793 74.9363C86.6793 91.1804 86.6793 98.1114 119.986 98.1114Z"
        fill="#ECDBCA"
      />
      <mask
        id="mask0_3_508"
        style={{
          maskType: 'luminance'
        }}
        maskUnits="userSpaceOnUse"
        x={86}
        y={53}
        width={68}
        height={46}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M119.986 98.1114C153.293 98.1114 153.293 91.1804 153.293 74.9363C153.293 58.6922 146.288 53.0873 119.986 53.0873C93.6844 53.0873 86.6793 58.6922 86.6793 74.9363C86.6793 91.1804 86.6793 98.1114 119.986 98.1114Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3_508)" />

      <mask
        id="mask1_3_508"
        style={{
          maskType: 'luminance'
        }}
        maskUnits="userSpaceOnUse"
        x={111}
        y={78}
        width={19}
        height={11}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.034 83.2307C111.584 82.2472 111.32 81.1872 111.319 80.0967C111.319 79.5964 111.532 79.1069 111.903 78.7536C112.274 78.3996 112.789 78.197 113.314 78.197H127.279C127.804 78.197 128.318 78.3996 128.69 78.7536C129.061 79.1069 129.274 79.5964 129.274 80.0967C129.269 81.733 128.686 83.2972 127.747 84.6453C126.802 85.991 125.483 87.1391 123.867 87.8699C122.791 88.3543 121.577 88.6462 120.296 88.6456C118.371 88.6456 116.616 87.9914 115.212 87.008C113.803 86.0201 112.711 84.7042 112.034 83.2307Z"
          fill="white"
        />
      </mask>

      <Face mood={mood} transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`} />
    </svg>
  );
};
