/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState} from "react";
import {Code, Link, LockOpen, Lock} from "@material-ui/icons";
import styles from "./App.module.scss";
import {EncryptView} from "./EncryptView";
import {DecryptView} from "./DecryptView";

export interface AppProps {

}

export function App(props: PropsWithChildren<AppProps>): ReactElement {

	const [mode, setMode] = useState(0);

	return (<div className={styles.container}>
		<nav>
			<h1>crypto.elijahcobb.com</h1>
			<div className={styles.links}>
				<a href={"https://github.com/elijahjcobb/web-crypt"} rel={"noopener noreferrer"} target={"_blank"}><Code className={"icon"}/></a>
				<a href={"https://elijahcobb.com"} rel={"noopener noreferrer"} target={"_blank"}><Link className={"icon"}/></a>
			</div>
		</nav>
		{mode === 0 ? <EncryptView/> : <DecryptView/>}
		<div className={styles.mode}>
			<div onClick={() => setMode(0)} className={mode === 0 ? styles.active : ""}><LockOpen className={"icon"}/><span>encrypt</span></div>
			<div onClick={() => setMode(1)} className={mode === 1 ? styles.active : ""}><Lock className={"icon"}/><span>decrypt</span></div>
		</div>
	</div>);

}
