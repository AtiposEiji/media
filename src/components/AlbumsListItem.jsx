import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from './PhotosList';

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }

    const header = <div>
        <Button loading={results.isLoading} onClick={handleRemoveAlbum} >
            <GoTrash />
        </Button>
        {album.title}
    </div>

    return <ExpandablePanel key={album.id} header={header} >
        <PhotosList album={album} />
    </ExpandablePanel>
}

export default AlbumsListItem;