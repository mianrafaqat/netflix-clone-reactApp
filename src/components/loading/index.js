import React from "react";

import { Spinner, Picture, ReleaseBody, LockBody } from "./style/loading";

export default function Loading({src, ...restProps}) {
    <Spinner {...restProps}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}