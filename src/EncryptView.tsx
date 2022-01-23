/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState, useEffect} from "react";
import {VpnKey, Description, Lock} from "@material-ui/icons";
import {encrypt} from "./crypto";
import styles from "./App.module.scss";

export interface EncryptViewProps {

}

export function EncryptView(props: PropsWithChildren<EncryptViewProps>): ReactElement {

	const [password, setPassword] = useState("");
	const [value, setValue] = useState("");
	const [encrypted, setEncrypted] = useState("");

	useEffect(() => {
		encrypt(value, password).then(e => setEncrypted(e)).catch(() => setEncrypted("ERROR!"));
	}, [password, value])

	return (<div className={styles.main}>
		<div className={styles.input + " " + styles.password}>
			<VpnKey className={styles.icon}/>
			<input placeholder={"Password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
		</div>
		<div className={styles.input}>
			<Description className={styles.icon}/>
			<textarea className={styles.bigfield} placeholder={"Content"} onChange={ev => setValue(ev.target.value)} value={value}/>
		</div>
		<div
			onClick={() => {
				navigator.clipboard.writeText(encrypted).catch(console.error);
			}}
			className={styles.input + " " + styles.answer}>
			<Lock className={styles.icon}/>
			<textarea className={styles.bigfield} disabled={true} value={encrypted}/>
		</div>
	</div>);

}
