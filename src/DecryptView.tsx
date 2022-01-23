/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState, useEffect} from "react";
import {decrypt} from "./crypto";
import styles from "./App.module.scss";
import {VpnKey, LockOpen, Lock} from "@material-ui/icons";

export interface DecryptViewProps {

}

export function DecryptView(props: PropsWithChildren<DecryptViewProps>): ReactElement {

	const [password, setPassword] = useState("");
	const [encrypted, setEncrypted] = useState("");
	const [value, setValue] = useState("");

	useEffect(() => {
		decrypt(encrypted, password).then(e => setValue(e)).catch(() => setValue("Password incorrect."));
	}, [password, encrypted])

	return (<div className={styles.main}>
		<div className={styles.input + " " + styles.password}>
			<VpnKey className={styles.icon}/>
			<input placeholder={"Password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
		</div>
		<div className={styles.input}>
			<Lock className={styles.icon}/>
			<textarea placeholder={"Content"} onChange={ev => setEncrypted(ev.target.value)} value={encrypted}/>
		</div>
		<div
			onClick={() => {
				navigator.clipboard.writeText(encrypted).catch(console.error);
			}}
			className={styles.input + " " + styles.answer}>
			<LockOpen className={styles.icon}/>
			<textarea className={"result"} disabled={true} value={value}/>
		</div>
	</div>);

}
