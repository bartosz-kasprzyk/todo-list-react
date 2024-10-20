import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (target: string): string | null => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(target);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }: { key: string, value?: string }) => {
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        };

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};