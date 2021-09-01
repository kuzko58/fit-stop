import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Redirect({ to }) {
    const router = useRouter();
    useEffect(() => {
        router.push(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [to])
    return null;
}
