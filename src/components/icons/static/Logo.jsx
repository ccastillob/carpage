import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/" className="container-icon s-relative s-cross-center">
			<svg className="icon-logo" viewBox="0 0 61 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill="#0080CA" d="M25.4167 8.87255H29.4831V10.6223H25.4167V8.87255Z" />
				<path fill="#0080CA" d="M60.1275 6.2572L53.2215 5.40865C51.9623 4.74304 50.6554 4.14721 49.3081 3.62434C44.8585 1.89021 40.0292 0.995391 35.144 1.00002H33.9443C28.1792 1.00358 22.5064 2.24829 17.4429 4.6206L13.9577 6.25649C9.87791 6.296 5.87677 7.22962 2.33234 8.96801C0.8919 9.67882 0.0024821 10.9976 0 12.4259V17.6201C0 18.1035 0.455051 18.495 1.01683 18.495H4.43054C5.54086 21.2204 9.00877 22.6555 12.1763 21.7002C13.92 21.1745 15.2905 19.9949 15.9015 18.495H43.0639C44.1743 21.2204 47.6422 22.6555 50.8097 21.7002C52.553 21.1745 53.9239 19.9949 54.5349 18.495H54.8998C55.0293 18.495 55.1575 18.474 55.2779 18.4327L58.5708 17.2959C60.0419 16.7947 61.0054 15.5696 61 14.2088V7.12319C61 6.68824 60.6281 6.31913 60.1275 6.2572ZM14.1508 17.4453C13.7012 19.3386 11.5529 20.5598 9.35254 20.1729C7.15174 19.786 5.7324 17.9376 6.18207 16.044C6.63216 14.1508 8.78041 12.9296 10.9808 13.3165C12.8742 13.6493 14.2336 15.0826 14.2332 16.7456C14.2332 16.9805 14.2054 17.2151 14.1508 17.4453ZM32.5332 16.7456H16.2664C16.2664 13.8468 13.5357 11.4969 10.1667 11.4969C6.79763 11.4969 4.0665 13.8468 4.0665 16.7456H2.03325V12.4259C2.03449 11.6247 2.53339 10.8847 3.34173 10.4868C6.65946 8.85696 10.4132 7.99915 14.2332 7.99808H32.5332V16.7456ZM32.5332 6.24866H18.2206L18.4167 6.15647C22.7633 4.12407 27.5914 2.97191 32.5332 2.78789V6.24866ZM34.5665 2.74945H35.1419C39.239 2.74553 43.2989 3.41469 47.1044 4.72133L45.3293 6.24866H34.5665V2.74945ZM52.7842 17.4453C52.3346 19.3386 50.1863 20.5598 47.9855 20.1729C45.7851 19.786 44.3658 17.9376 44.8155 16.044C45.2651 14.1508 47.4138 12.9296 49.6142 13.3165C51.5076 13.6493 52.867 15.0826 52.8666 16.7456C52.8666 16.9805 52.8388 17.2151 52.7842 17.4453ZM58.9667 8.87262H55.9166V10.6224H58.9667V14.2088C58.9692 14.8534 58.5125 15.4336 57.8159 15.6703L54.8998 16.6779C54.8998 16.5975 54.8878 16.5178 54.8816 16.4373C54.8754 16.3569 54.8733 16.2626 54.8634 16.175C54.8531 16.0875 54.8328 15.9999 54.8167 15.9127C54.8001 15.8251 54.7881 15.7376 54.7678 15.6582C54.7476 15.5785 54.7178 15.4902 54.6913 15.4069C54.6648 15.324 54.6446 15.24 54.614 15.1585C54.5838 15.0773 54.5469 14.9994 54.5126 14.9196C54.4779 14.8402 54.4464 14.758 54.4108 14.679C54.3753 14.6003 54.3273 14.5288 54.2847 14.4544C54.2421 14.38 54.2003 14.2985 54.1527 14.2234C54.1047 14.1483 54.0509 14.0842 54.005 14.0145C53.9595 13.9444 53.9037 13.8646 53.8458 13.7931C53.7874 13.7212 53.7336 13.6646 53.6778 13.5998C53.6219 13.535 53.5587 13.4589 53.4937 13.3916C53.4288 13.3243 53.3679 13.2716 53.3047 13.2165C53.2418 13.1617 53.1714 13.0873 53.1015 13.026C53.0312 12.9648 52.9621 12.9164 52.8922 12.8623C52.8219 12.8082 52.7466 12.7441 52.6692 12.6872C52.5923 12.6306 52.5137 12.5868 52.4367 12.537C52.3594 12.4872 52.282 12.4338 52.201 12.3871C52.1195 12.3409 52.028 12.2999 51.9407 12.2508C51.853 12.2017 51.7819 12.1633 51.6996 12.1259C51.6172 12.0881 51.5147 12.0486 51.4212 12.0102C51.3277 11.9718 51.2544 11.9376 51.168 11.9063C51.0815 11.8746 50.9645 11.8415 50.8631 11.8102C50.7613 11.7785 50.6951 11.7539 50.6087 11.7304C50.4929 11.6998 50.3741 11.6778 50.2558 11.6525C50.1785 11.6368 50.1044 11.6158 50.0262 11.6019C49.9013 11.5799 49.773 11.5678 49.646 11.5518C49.5708 11.5432 49.4988 11.529 49.4235 11.5229C49.22 11.5055 49.0168 11.4959 48.8034 11.4959C45.4356 11.4987 42.7065 13.8468 42.7032 16.7445H34.5669V7.99773H45.75C46.0197 7.99773 46.2783 7.90554 46.4685 7.74145L49.1049 5.47307C50.2116 5.92618 51.2875 6.43268 52.3279 6.99007C52.4479 7.0545 52.582 7.09685 52.7222 7.11429L58.9667 7.88134V8.87262Z" />
				<path fill="#0080CA" d="M6.144 40.2325C5.36533 40.2325 4.656 40.1045 4.016 39.8486C3.376 39.5926 2.82667 39.2194 2.368 38.7288C1.90933 38.2382 1.552 37.6357 1.296 36.9212C1.05067 36.196 0.928 35.3694 0.928 34.4416C0.928 33.5138 1.06667 32.6926 1.344 31.9781C1.632 31.2529 2.016 30.645 2.496 30.1544C2.976 29.6639 3.536 29.2906 4.176 29.0347C4.816 28.7787 5.49867 28.6507 6.224 28.6507C6.68267 28.6507 7.09333 28.6827 7.456 28.7467C7.82933 28.8107 8.14933 28.8854 8.416 28.9707C8.69333 29.056 8.91733 29.1413 9.088 29.2266C9.25867 29.3119 9.376 29.3759 9.44 29.4186L8.992 30.6983C8.896 30.6344 8.75733 30.565 8.576 30.4904C8.39467 30.4157 8.18667 30.3411 7.952 30.2664C7.728 30.1918 7.47733 30.1331 7.2 30.0905C6.93333 30.0371 6.66133 30.0105 6.384 30.0105C5.79733 30.0105 5.26933 30.1118 4.8 30.3144C4.33067 30.517 3.93067 30.8103 3.6 31.1942C3.26933 31.5782 3.01333 32.0474 2.832 32.602C2.66133 33.1459 2.576 33.7591 2.576 34.4416C2.576 35.1028 2.65067 35.7054 2.8 36.2493C2.96 36.7932 3.19467 37.2624 3.504 37.657C3.81333 38.0409 4.19733 38.3396 4.656 38.5528C5.12533 38.7661 5.66933 38.8728 6.288 38.8728C7.00267 38.8728 7.59467 38.7981 8.064 38.6488C8.53333 38.4995 8.88533 38.3662 9.12 38.2489L9.52 39.5287C9.44533 39.582 9.312 39.6513 9.12 39.7366C8.928 39.8113 8.688 39.8859 8.4 39.9606C8.112 40.0352 7.776 40.0992 7.392 40.1525C7.008 40.2059 6.592 40.2325 6.144 40.2325Z" />
				<path fill="#0080CA" d="M14.0179 38.9208C14.3699 38.9208 14.6792 38.9154 14.9459 38.9048C15.2232 38.8834 15.4525 38.8515 15.6339 38.8088V36.3293C15.5272 36.2759 15.3512 36.2333 15.1059 36.2013C14.8712 36.1586 14.5832 36.1373 14.2419 36.1373C14.0179 36.1373 13.7779 36.1533 13.5219 36.1853C13.2765 36.2173 13.0472 36.2866 12.8339 36.3933C12.6312 36.4892 12.4605 36.6279 12.3219 36.8092C12.1832 36.9798 12.1139 37.2091 12.1139 37.497C12.1139 38.0303 12.2845 38.4035 12.6259 38.6168C12.9672 38.8195 13.4312 38.9208 14.0179 38.9208ZM13.8899 31.4662C14.4872 31.4662 14.9885 31.5462 15.3939 31.7062C15.8099 31.8555 16.1405 32.0741 16.3859 32.362C16.6419 32.6393 16.8232 32.9752 16.9299 33.3698C17.0365 33.7538 17.0899 34.1803 17.0899 34.6496V39.8486C16.9619 39.8699 16.7805 39.9019 16.5459 39.9446C16.3219 39.9766 16.0659 40.0086 15.7779 40.0406C15.4899 40.0726 15.1752 40.0992 14.8339 40.1205C14.5032 40.1525 14.1725 40.1685 13.8419 40.1685C13.3725 40.1685 12.9405 40.1205 12.5459 40.0246C12.1512 39.9286 11.8099 39.7793 11.5219 39.5767C11.2339 39.3634 11.0099 39.0861 10.8499 38.7448C10.6899 38.4035 10.6099 37.993 10.6099 37.513C10.6099 37.0545 10.7005 36.6599 10.8819 36.3293C11.0739 35.9987 11.3299 35.7321 11.6499 35.5294C11.9699 35.3268 12.3432 35.1775 12.7699 35.0815C13.1965 34.9855 13.6445 34.9375 14.1139 34.9375C14.2632 34.9375 14.4179 34.9482 14.5779 34.9695C14.7379 34.9802 14.8872 35.0015 15.0259 35.0335C15.1752 35.0548 15.3032 35.0762 15.4099 35.0975C15.5165 35.1188 15.5912 35.1348 15.6339 35.1455V34.7296C15.6339 34.4843 15.6072 34.2443 15.5539 34.0097C15.5005 33.7644 15.4045 33.5511 15.2659 33.3698C15.1272 33.1779 14.9352 33.0286 14.6899 32.9219C14.4552 32.8046 14.1459 32.746 13.7619 32.746C13.2712 32.746 12.8392 32.7833 12.4659 32.8579C12.1032 32.9219 11.8312 32.9912 11.6499 33.0659L11.4739 31.8341C11.6659 31.7488 11.9859 31.6688 12.4339 31.5942C12.8819 31.5089 13.3672 31.4662 13.8899 31.4662Z" />
				<path fill="#0080CA" d="M22.6332 31.4982C22.7612 31.4982 22.9052 31.5089 23.0652 31.5302C23.2359 31.5408 23.4012 31.5622 23.5612 31.5942C23.7212 31.6155 23.8652 31.6422 23.9932 31.6742C24.1319 31.6955 24.2332 31.7168 24.2972 31.7381L24.0412 33.0339C23.9239 32.9912 23.7266 32.9432 23.4492 32.8899C23.1826 32.8259 22.8359 32.7939 22.4092 32.7939C22.1319 32.7939 21.8546 32.8259 21.5772 32.8899C21.3106 32.9432 21.1346 32.9806 21.0492 33.0019V39.9926H19.5612V32.0261C19.9132 31.8981 20.3506 31.7808 20.8732 31.6742C21.3959 31.5568 21.9826 31.4982 22.6332 31.4982Z" />
				<path fill="#0080CA" d="M28.7731 28.7947C30.3305 28.7947 31.5251 29.0933 32.3571 29.6905C33.1998 30.2771 33.6211 31.1569 33.6211 32.33C33.6211 32.9699 33.5038 33.5191 33.2691 33.9777C33.0451 34.4256 32.7145 34.7936 32.2771 35.0815C31.8505 35.3588 31.3278 35.5614 30.7091 35.6894C30.0905 35.8174 29.3918 35.8814 28.6131 35.8814H27.3811V39.9926H25.8291V29.0667C26.2665 28.96 26.7518 28.8907 27.2851 28.8587C27.8291 28.816 28.3251 28.7947 28.7731 28.7947ZM28.9011 30.1544C28.2398 30.1544 27.7331 30.1704 27.3811 30.2024V34.5536H28.5491C29.0825 34.5536 29.5625 34.5216 29.9891 34.4576C30.4158 34.383 30.7731 34.2657 31.0611 34.1057C31.3598 33.9351 31.5891 33.7058 31.7491 33.4178C31.9091 33.1299 31.9891 32.7619 31.9891 32.314C31.9891 31.8874 31.9038 31.5355 31.7331 31.2582C31.5731 30.981 31.3491 30.7623 31.0611 30.6024C30.7838 30.4317 30.4585 30.3144 30.0851 30.2504C29.7118 30.1864 29.3171 30.1544 28.9011 30.1544Z" />
				<path fill="#0080CA" d="M37.9866 38.9208C38.3386 38.9208 38.648 38.9154 38.9146 38.9048C39.192 38.8834 39.4213 38.8515 39.6026 38.8088V36.3293C39.496 36.2759 39.32 36.2333 39.0746 36.2013C38.84 36.1586 38.552 36.1373 38.2106 36.1373C37.9866 36.1373 37.7466 36.1533 37.4906 36.1853C37.2453 36.2173 37.016 36.2866 36.8026 36.3933C36.6 36.4892 36.4293 36.6279 36.2906 36.8092C36.152 36.9798 36.0826 37.2091 36.0826 37.497C36.0826 38.0303 36.2533 38.4035 36.5946 38.6168C36.936 38.8195 37.4 38.9208 37.9866 38.9208ZM37.8586 31.4662C38.456 31.4662 38.9573 31.5462 39.3626 31.7062C39.7786 31.8555 40.1093 32.0741 40.3546 32.362C40.6106 32.6393 40.792 32.9752 40.8986 33.3698C41.0053 33.7538 41.0586 34.1803 41.0586 34.6496V39.8486C40.9306 39.8699 40.7493 39.9019 40.5146 39.9446C40.2906 39.9766 40.0346 40.0086 39.7466 40.0406C39.4586 40.0726 39.144 40.0992 38.8026 40.1205C38.472 40.1525 38.1413 40.1685 37.8106 40.1685C37.3413 40.1685 36.9093 40.1205 36.5146 40.0246C36.12 39.9286 35.7786 39.7793 35.4906 39.5767C35.2026 39.3634 34.9786 39.0861 34.8186 38.7448C34.6586 38.4035 34.5786 37.993 34.5786 37.513C34.5786 37.0545 34.6693 36.6599 34.8506 36.3293C35.0426 35.9987 35.2986 35.7321 35.6186 35.5294C35.9386 35.3268 36.312 35.1775 36.7386 35.0815C37.1653 34.9855 37.6133 34.9375 38.0826 34.9375C38.232 34.9375 38.3866 34.9482 38.5466 34.9695C38.7066 34.9802 38.856 35.0015 38.9946 35.0335C39.144 35.0548 39.272 35.0762 39.3786 35.0975C39.4853 35.1188 39.56 35.1348 39.6026 35.1455V34.7296C39.6026 34.4843 39.576 34.2443 39.5226 34.0097C39.4693 33.7644 39.3733 33.5511 39.2346 33.3698C39.096 33.1779 38.904 33.0286 38.6586 32.9219C38.424 32.8046 38.1146 32.746 37.7306 32.746C37.24 32.746 36.808 32.7833 36.4346 32.8579C36.072 32.9219 35.8 32.9912 35.6186 33.0659L35.4426 31.8341C35.6346 31.7488 35.9546 31.6688 36.4026 31.5942C36.8506 31.5089 37.336 31.4662 37.8586 31.4662Z" />
				<path fill="#0080CA" d="M48.746 39.1607C48.618 39.246 48.3673 39.358 47.994 39.4967C47.6313 39.6246 47.2047 39.6886 46.714 39.6886C46.2127 39.6886 45.738 39.6086 45.29 39.4487C44.8527 39.2887 44.4687 39.0434 44.138 38.7128C43.8073 38.3716 43.546 37.9503 43.354 37.4491C43.162 36.9478 43.066 36.3506 43.066 35.6574C43.066 35.0495 43.1567 34.495 43.338 33.9937C43.5193 33.4818 43.7807 33.0446 44.122 32.682C44.474 32.3087 44.9007 32.0208 45.402 31.8181C45.9033 31.6048 46.4687 31.4982 47.098 31.4982C47.7913 31.4982 48.394 31.5515 48.906 31.6582C49.4287 31.7541 49.866 31.8448 50.218 31.9301V39.3527C50.218 40.6325 49.8873 41.5603 49.226 42.1362C48.5647 42.7121 47.562 43 46.218 43C45.6953 43 45.1993 42.9573 44.73 42.872C44.2713 42.7867 43.8713 42.6854 43.53 42.5681L43.802 41.2723C44.1007 41.3896 44.4633 41.491 44.89 41.5763C45.3273 41.6723 45.7807 41.7202 46.25 41.7202C47.1353 41.7202 47.77 41.5443 48.154 41.1923C48.5487 40.8404 48.746 40.2805 48.746 39.5127V39.1607ZM48.73 32.9859C48.5807 32.9432 48.378 32.9059 48.122 32.8739C47.8767 32.8313 47.5407 32.8099 47.114 32.8099C46.314 32.8099 45.6953 33.0712 45.258 33.5938C44.8313 34.1164 44.618 34.8096 44.618 35.6734C44.618 36.1533 44.6767 36.5639 44.794 36.9052C44.922 37.2464 45.0873 37.529 45.29 37.753C45.5033 37.977 45.7433 38.1423 46.01 38.2489C46.2873 38.3556 46.57 38.4089 46.858 38.4089C47.2527 38.4089 47.6153 38.3556 47.946 38.2489C48.2767 38.1316 48.538 37.9983 48.73 37.849V32.9859Z" />
				<path fill="#0080CA" d="M52.316 35.8494C52.316 35.1135 52.4227 34.4736 52.636 33.9297C52.8493 33.3752 53.132 32.9166 53.484 32.554C53.836 32.1914 54.2413 31.9194 54.7 31.7381C55.1587 31.5568 55.628 31.4662 56.108 31.4662C57.228 31.4662 58.0867 31.8181 58.684 32.522C59.2813 33.2152 59.58 34.2763 59.58 35.7054C59.58 35.7694 59.58 35.8547 59.58 35.9613C59.58 36.0573 59.5747 36.148 59.564 36.2333H53.868C53.932 37.0971 54.1827 37.753 54.62 38.2009C55.0573 38.6488 55.74 38.8728 56.668 38.8728C57.1907 38.8728 57.628 38.8301 57.98 38.7448C58.3427 38.6488 58.6147 38.5582 58.796 38.4729L59.004 39.7206C58.8227 39.8166 58.5027 39.9179 58.044 40.0246C57.596 40.1312 57.084 40.1845 56.508 40.1845C55.7827 40.1845 55.1533 40.0779 54.62 39.8646C54.0973 39.6406 53.6653 39.3367 53.324 38.9528C52.9827 38.5688 52.7267 38.1156 52.556 37.593C52.396 37.0598 52.316 36.4786 52.316 35.8494ZM58.028 35.0335C58.0387 34.3616 57.868 33.8124 57.516 33.3858C57.1747 32.9486 56.7 32.73 56.092 32.73C55.7507 32.73 55.4467 32.7993 55.18 32.9379C54.924 33.0659 54.7053 33.2365 54.524 33.4498C54.3427 33.6631 54.1987 33.9084 54.092 34.1857C53.996 34.463 53.932 34.7456 53.9 35.0335H58.028Z" />
			</svg>
		</Link >
	)
}

export default Logo;

