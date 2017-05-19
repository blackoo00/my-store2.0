import React from "react";
import styles from "./style.scss";

const ActionSheet = ({children,show,toggleActionSheet,hasHeader,title}) => {
	return(
		<div>
			<div className={show ? styles.actionSheetWrapBGC : styles.actionSheetWrapBGCHide} onClick={toggleActionSheet}></div>
			<div className={show ? styles.actionSheetEnter : styles.actionSheetLeave}>
				<header className={hasHeader?styles.actionSheetHeader:styles.actionSheetHeaderHide}>
					<item></item>
					<item className={styles.actionSheetTitle}>{title}</item>
					<item className={styles.actionSheetClose} onClick={toggleActionSheet}>关闭</item>
				</header>
				{children}
			</div>
		</div>
	)
}

export default ActionSheet
