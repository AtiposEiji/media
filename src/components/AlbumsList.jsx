import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  let content;

  const handleAddAlbum = () => {
    addAlbum(user);
  }

  if (isFetching) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />
    })
  }

  return <div>
    <div className="m-2 flex flex-row items-center justify-between">
      <h3 className="text-lg font-bold">Albums for {user.name}</h3>
      <Button loading={results.isFetching} onClick={handleAddAlbum}>
        + Add Album
      </Button>
    </div>
    <div>
      {content}
    </div>
  </div>;
}

export default AlbumsList;
