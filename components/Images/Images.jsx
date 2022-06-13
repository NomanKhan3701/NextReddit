import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Images.module.scss";
import defaultImage from "../../assets/default.jpg";
import { ImCross } from "react-icons/im";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Images = ({ ImageUrls }) => {
	const popupRef = useRef(null);
	const imgContainerRef = useRef(null);
	const [popupImg, setPopupImg] = useState();
	const [totalImage, setTotalImage] = useState(ImageUrls.length);
	const [currentImage, setCurrentImage] = useState(0);

	const showPopup = (e) => {
		popupRef.current.style.opacity = "1";
		popupRef.current.style.pointerEvents = "all";
		setPopupImg(e.target.getAttribute("url"));
		setCurrentImage(Number(e.target.getAttribute("index")) + 1);
	};

	const closePopup = (e) => {
		if (!e.target.matches("img") && !e.target.matches("i") && !e.target.matches("svg") && !e.target.matches("path")) {
			popupRef.current.style.opacity = "0";
			popupRef.current.style.pointerEvents = "none";
			setCurrentImage(defaultImage);
		}
	};

	const closeCrossPopup = (e) => {
		popupRef.current.style.opacity = "0";
		popupRef.current.style.pointerEvents = "none";
		setCurrentImage(defaultImage);
	}

	const nextImage = () => {
		setPopupImg(imgContainerRef.current.querySelector(`[index="${currentImage}"]`).getAttribute("url"));
		setCurrentImage((curr) => curr + 1);

	}

	const prevImage = () => {
		setPopupImg(imgContainerRef.current.querySelector(`[index="${currentImage - 2}"]`).getAttribute("url"));
		setCurrentImage((curr) => curr - 1);
	}

	return (
		<>
			<div className={styles.imgContainer} ref={imgContainerRef}>
				{ImageUrls.map((url, index) => {
					return (
						<div
							key={index}
							index={index}
							url={url}
							className={styles.image}
							onClick={showPopup}
						>
							<div className={styles.imageWrapper}>
								<Image quality={100} alt={defaultImg} src={url} width={270} height={270} objectFit="cover" />
							</div>
						</div>
					);
				})}
			</div>
			<div
				ref={popupRef}
				className={`${styles.popupContainer} active`}
				onClick={closePopup}
			>
				<div className={styles.imageContainer}>
					{currentImage > 1 ? (
						<i className={styles.left}>
							<FaLessThan onClick={prevImage} />
						</i>
					) : (
						""
					)}
					<Image
						quality={100}
						src={popupImg ? popupImg : defaultImage}
						width={600}
						height={600}
						objectFit="cover"
					/>
					<div className={styles.cross} onClick={closeCrossPopup}>
						<ImCross />
					</div>
					<div className={styles.imgInfo}>
						Image <span>{currentImage}</span> out of <span>{totalImage}</span>
					</div>
					{currentImage != totalImage ? (
						<i className={styles.right}>
							<FaGreaterThan onClick={nextImage} />
						</i>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
};

export default Images;
