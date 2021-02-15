/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState, useEffect} from "react";
import {decrypt} from "./crypto";
import "./EncryptView.css"
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

	return (<div className={"EncryptView"}>
		<div className={"input"}>
			<VpnKey className={"icon"}/>
			<input placeholder={"Password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
		</div>
		<div className={"input"}>
			<Lock className={"icon"}/>
			<textarea placeholder={"Content"} onChange={ev => setEncrypted(ev.target.value)} value={encrypted}/>
		</div>
		<div className={"input"}>
			<LockOpen className={"icon"}/>
			<textarea className={"result"} disabled={true} value={value}/>
		</div>
	</div>);

}
