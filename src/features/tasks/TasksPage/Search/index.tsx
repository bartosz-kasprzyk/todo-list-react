import Input from "../../Input";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {
    const query = useQueryParameter("szukaj");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        replaceQueryParameter({
            key: "szukaj",
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default Search;