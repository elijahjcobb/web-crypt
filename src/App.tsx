/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState} from "react";
import {Code, Link, LockOpen, Lock} from "@material-ui/icons";
import "./App.css";
import {EncryptView} from "./EncryptView";
import {DecryptView} from "./DecryptView";

export interface AppProps {

}

export function App(props: PropsWithChildren<AppProps>): ReactElement {

	const [mode, setMode] = useState(0);

	return (<div className={"App"}>
		<nav>
			<h1>crypto.elijahcobb.com</h1>
			<div>
				<a href={"https://github.com/elijahjcobb/web-crypt"} rel={"noopener noreferrer"} target={"_blank"}><Code className={"icon"}/></a>
				<a href={"https://elijahcobb.com"} rel={"noopener noreferrer"} target={"_blank"}><Link className={"icon"}/></a>
			</div>
		</nav>
		<main>
			{mode === 0 ? <EncryptView/> : <DecryptView/>}
		</main>
		<footer>
			<span onClick={() => setMode(0)} className={mode === 0 ? "active" : ""}><LockOpen className={"icon"}/>encrypt</span>
			<span onClick={() => setMode(1)} className={mode === 1 ? "active" : ""}><Lock className={"icon"}/>decrypt</span>
		</footer>
	</div>);

}
