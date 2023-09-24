type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      viewBox='0 0 47 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.424 7.456H6.444V10H0.432V9.136L1.512 8.824L1.32 9.16V2.44L1.512 2.764L0.432 2.476V1.612L3.996 1.552V2.416L2.856 2.764L3.036 2.44V9.028L2.772 8.764H5.388L5.148 9.04L5.424 7.456ZM9.31163 10.144C8.77563 10.144 8.32763 9.972 7.96763 9.628C7.60763 9.276 7.42763 8.748 7.42763 8.044V4.54L7.58363 4.78L6.63563 4.492V3.628L9.10763 3.544V7.768C9.10763 8.144 9.19163 8.424 9.35963 8.608C9.52763 8.784 9.75163 8.872 10.0316 8.872C10.2476 8.872 10.4836 8.816 10.7396 8.704C11.0036 8.584 11.2636 8.4 11.5196 8.152L11.3996 8.452V4.504L11.5556 4.78L10.6076 4.492V3.628L13.0796 3.544V9.112L12.8756 8.824L13.8836 9.136V9.988L11.7716 10.084L11.5436 8.908L11.7836 8.992C11.3836 9.376 10.9676 9.664 10.5356 9.856C10.1116 10.048 9.70363 10.144 9.31163 10.144ZM14.1708 10V9.148L15.1668 8.92L14.7588 9.148L16.6428 6.544L17.0268 6.508L18.9588 3.64L20.6028 3.544V4.396L19.5828 4.66L20.0628 4.396L18.2388 6.856L17.8788 6.88L15.8268 10H14.1708ZM17.5548 10V9.136L18.3348 8.992L18.2388 9.22L16.7388 7.096L14.8068 4.408L15.1428 4.696L14.3148 4.504V3.64L17.2908 3.544V4.396L16.4868 4.576L16.6068 4.324L17.9148 6.22L20.0628 9.136L19.7748 8.908L20.7348 9.136V10H17.5548ZM21.3148 10V9.136L22.4188 8.824L22.2028 9.16V2.44L22.5028 2.8L21.3148 2.476V1.612L23.9908 1.552H25.1548C26.1148 1.552 26.8388 1.752 27.3268 2.152C27.8148 2.552 28.0588 3.128 28.0588 3.88C28.0588 4.552 27.8508 5.108 27.4348 5.548C27.0268 5.988 26.3828 6.256 25.5028 6.352L25.5148 6.16C25.8268 6.168 26.0828 6.216 26.2828 6.304C26.4828 6.392 26.6468 6.516 26.7748 6.676C26.9108 6.828 27.0348 7.012 27.1468 7.228L28.1068 9.076L27.6148 8.776L28.7188 9.136V10H26.7508L25.6708 7.684C25.5268 7.38 25.4028 7.148 25.2988 6.988C25.1948 6.82 25.0668 6.708 24.9148 6.652C24.7628 6.588 24.5428 6.56 24.2548 6.568H23.6308L23.9188 6.328V9.16L23.6908 8.812L24.9028 9.136V10H21.3148ZM23.9188 5.8L23.6308 5.38H24.6268C25.1868 5.38 25.6068 5.264 25.8868 5.032C26.1668 4.8 26.3068 4.456 26.3068 4C26.3068 3.616 26.1948 3.316 25.9708 3.1C25.7468 2.884 25.4028 2.776 24.9388 2.776H23.6308L23.9188 2.512V5.8ZM31.6484 9.016L31.5284 8.872L32.4524 9.136V10H29.1644V9.136L30.0884 8.872L29.9684 9.016V4.636L30.0764 4.744L29.1644 4.492V3.628L31.6484 3.544V9.016ZM30.7604 2.608C30.4644 2.608 30.2244 2.524 30.0404 2.356C29.8644 2.188 29.7764 1.948 29.7764 1.636C29.7764 1.3 29.8684 1.052 30.0524 0.891999C30.2444 0.724 30.4844 0.64 30.7724 0.64C31.0524 0.64 31.2844 0.724 31.4684 0.891999C31.6524 1.052 31.7444 1.296 31.7444 1.624C31.7444 1.952 31.6484 2.2 31.4564 2.368C31.2724 2.528 31.0404 2.608 30.7604 2.608ZM35.3967 10.144C34.9327 10.144 34.5207 10.024 34.1607 9.784C33.8087 9.536 33.5287 9.172 33.3207 8.692C33.1207 8.212 33.0207 7.628 33.0207 6.94C33.0207 5.756 33.3207 4.88 33.9207 4.312C34.5207 3.736 35.3647 3.448 36.4527 3.448C36.6287 3.448 36.8047 3.456 36.9807 3.472C37.1567 3.488 37.3407 3.516 37.5327 3.556L37.2207 3.748V1.768L37.3407 1.936L36.3567 1.612V0.76L38.9007 0.663999V9.064L38.6967 8.824L39.7047 9.136V9.988L37.5927 10.084L37.3767 9.052L37.5447 9.112C37.1927 9.456 36.8407 9.716 36.4887 9.892C36.1447 10.06 35.7807 10.144 35.3967 10.144ZM36.0447 8.908C36.2527 8.908 36.4727 8.852 36.7047 8.74C36.9367 8.62 37.1767 8.448 37.4247 8.224L37.2207 8.728V4.42L37.4247 4.804C37.0487 4.7 36.7087 4.648 36.4047 4.648C35.8367 4.648 35.4207 4.84 35.1567 5.224C34.9007 5.6 34.7727 6.12 34.7727 6.784C34.7727 7.216 34.8247 7.592 34.9287 7.912C35.0327 8.232 35.1767 8.48 35.3607 8.656C35.5527 8.824 35.7807 8.908 36.0447 8.908ZM43.1789 10.144C42.5949 10.144 42.0829 10.024 41.6429 9.784C41.2029 9.536 40.8589 9.172 40.6109 8.692C40.3709 8.204 40.2509 7.612 40.2509 6.916C40.2509 6.196 40.3789 5.58 40.6349 5.068C40.8989 4.548 41.2669 4.148 41.7389 3.868C42.2109 3.588 42.7669 3.448 43.4069 3.448C44.0309 3.448 44.5389 3.572 44.9309 3.82C45.3229 4.068 45.6109 4.408 45.7949 4.84C45.9789 5.264 46.0709 5.744 46.0709 6.28C46.0709 6.416 46.0629 6.552 46.0469 6.688C46.0389 6.824 46.0229 6.968 45.9989 7.12H41.6069V6.124H44.5589L44.3429 6.28C44.3509 5.96 44.3189 5.68 44.2469 5.44C44.1829 5.192 44.0709 5 43.9109 4.864C43.7589 4.728 43.5469 4.66 43.2749 4.66C42.9629 4.66 42.7109 4.752 42.5189 4.936C42.3269 5.112 42.1869 5.352 42.0989 5.656C42.0189 5.96 41.9789 6.3 41.9789 6.676C41.9789 7.1 42.0309 7.48 42.1349 7.816C42.2389 8.152 42.4069 8.416 42.6389 8.608C42.8789 8.8 43.1909 8.896 43.5749 8.896C43.8469 8.896 44.1389 8.848 44.4509 8.752C44.7709 8.648 45.1029 8.496 45.4469 8.296L46.0109 9.196C45.5469 9.516 45.0709 9.756 44.5829 9.916C44.1029 10.068 43.6349 10.144 43.1789 10.144Z'
        fill='currentColor'
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  ),
};