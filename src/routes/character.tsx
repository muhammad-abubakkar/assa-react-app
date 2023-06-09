import { useParams, useSearchParams } from "react-router-dom";
import { CharacterCard, Layout } from "../components";
import { useGetSingleCharacterApi } from "../hooks/api/useGetSingleCharacterApi";

export default function Character() {
  const [searchParams] = useSearchParams();
  const params = useParams<{ characterId: string }>();
  const characterId = params.characterId;
  const page = searchParams.get("fromPage") || "1";

  const { isLoading, data: character } = useGetSingleCharacterApi({
    characterId,
    page,
  });

  return (
    <Layout backLink={`/locations?page=${page}`}>
      <div className="character-detail">
        {character && <CharacterCard character={character} />}
      </div>
    </Layout>
  );
}