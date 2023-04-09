import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const DiscordIcon: FC<IProps> = memo(({ svgColor = 'currentColor' }) => {
  return (
    <svg className={'hoverIcon'} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_304_241)">
        <path
          d="M29.6289 6.55075C27.3977 5.5445 25.006 4.80075 22.505 4.37784C22.4827 4.37356 22.4596 4.37632 22.439 4.38572C22.4184 4.39513 22.4011 4.41072 22.3898 4.43034C22.0835 4.96846 21.7423 5.66992 21.5031 6.22409C18.8505 5.82777 16.1538 5.82777 13.5012 6.22409C13.2348 5.60993 12.9344 5.01108 12.6014 4.43034C12.5901 4.41048 12.5731 4.39454 12.5525 4.38463C12.5319 4.37473 12.5088 4.37134 12.4862 4.37492C9.98664 4.79784 7.59497 5.54159 5.36226 6.5493C5.34305 6.55735 5.32677 6.57109 5.31559 6.58867C0.77726 13.2605 -0.466698 19.7676 0.144343 26.193C0.146044 26.2088 0.150929 26.224 0.158701 26.2378C0.166473 26.2516 0.176969 26.2637 0.189552 26.2733C2.83846 28.2018 5.79296 29.6709 8.92934 30.6191C8.95121 30.6258 8.97459 30.6258 8.99645 30.619C9.0183 30.6123 9.0376 30.5991 9.05184 30.5812C9.72559 29.677 10.3264 28.7218 10.8398 27.7185C10.8704 27.6601 10.8412 27.5901 10.78 27.5668C9.83789 27.212 8.92509 26.7839 8.04997 26.2864C8.03424 26.2774 8.02099 26.2647 8.01141 26.2493C8.00182 26.2339 7.99619 26.2164 7.99504 26.1984C7.99388 26.1803 7.99723 26.1622 8.00478 26.1458C8.01233 26.1293 8.02385 26.115 8.0383 26.1041C8.22205 25.9685 8.4058 25.827 8.5808 25.6855C8.59655 25.6728 8.61553 25.6647 8.63561 25.6622C8.6557 25.6596 8.6761 25.6626 8.69455 25.671C14.4214 28.2435 20.6237 28.2435 26.2835 25.671C26.302 25.6621 26.3226 25.6587 26.343 25.661C26.3634 25.6633 26.3827 25.6713 26.3987 25.6841C26.5737 25.827 26.756 25.9685 26.9412 26.1041C26.9558 26.1148 26.9675 26.1289 26.9753 26.1452C26.9831 26.1615 26.9867 26.1795 26.9859 26.1976C26.985 26.2156 26.9797 26.2332 26.9703 26.2487C26.961 26.2642 26.948 26.2771 26.9325 26.2864C26.0604 26.788 25.1533 27.2124 24.201 27.5653C24.1864 27.5706 24.1731 27.579 24.1619 27.5899C24.1508 27.6008 24.1421 27.6139 24.1364 27.6284C24.1308 27.6429 24.1283 27.6584 24.1291 27.6739C24.1299 27.6895 24.1341 27.7046 24.1412 27.7185C24.6662 28.7203 25.267 29.6741 25.9277 30.5797C25.9414 30.5983 25.9605 30.6122 25.9825 30.6195C26.0044 30.6268 26.028 30.6272 26.0502 30.6205C29.1919 29.675 32.1513 28.2052 34.8031 26.2733C34.816 26.2642 34.8269 26.2525 34.8349 26.2389C34.843 26.2253 34.848 26.2102 34.8498 26.1945C35.5789 18.7658 33.6277 12.3112 29.6741 6.59159C29.6644 6.573 29.6484 6.55851 29.6289 6.55075ZM11.6958 22.2803C9.97205 22.2803 8.55018 20.7214 8.55018 18.8095C8.55018 16.8962 9.94434 15.3387 11.6958 15.3387C13.4604 15.3387 14.8691 16.9093 14.8414 18.8095C14.8414 20.7228 13.4473 22.2803 11.6958 22.2803V22.2803ZM23.326 22.2803C21.6008 22.2803 20.1804 20.7214 20.1804 18.8095C20.1804 16.8962 21.5731 15.3387 23.326 15.3387C25.0906 15.3387 26.4993 16.9093 26.4716 18.8095C26.4716 20.7228 25.0921 22.2803 23.326 22.2803V22.2803Z"
          fill={svgColor}/>
      </g>
      <defs>
        <clipPath id="clip0_304_241">
          <rect width="35" height="35" fill={svgColor}/>
        </clipPath>
      </defs>
    </svg>
  )
})
