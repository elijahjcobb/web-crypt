/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState, useEffect} from "react";
import {VpnKey, Description, Lock} from "@material-ui/icons";
import {encrypt} from "./crypto";
import "./EncryptView.css";

export interface EncryptViewProps {

}

export function EncryptView(props: PropsWithChildren<EncryptViewProps>): ReactElement {

	const [password, setPassword] = useState("");
	const [value, setValue] = useState("");
	const [encrypted, setEncrypted] = useState("");

	useEffect(() => {
		encrypt(value, password).then(e => setEncrypted(e)).catch(() => setEncrypted("ERROR!"));
	}, [password, value])

	return (<div className={"EncryptView"}>
		<div className={"input"}>
			<VpnKey className={"icon"}/>
			<input placeholder={"Password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
		</div>
		<div className={"input"}>
			<Description className={"icon"}/>
			<textarea placeholder={"Content"} onChange={ev => setValue(ev.target.value)} value={value}/>
		</div>
		<div className={"input"}>
			<Lock className={"icon"}/>
			<textarea className={"result"} disabled={true} value={encrypted}/>
		</div>
	</div>);

}
