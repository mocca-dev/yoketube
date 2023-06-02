import Label from '@/components/Label/Label';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '@/components/SecondaryBtn/SecondaryBtn';
import TextField from '@/components/TextField/TextField';
import TextFieldWithDelete from '@/components/TextFieldWithDelete/TextFieldWithDelete';

export default function NewList() {
  return (
    <>
      <Label name="name" text="Name" />
      <TextField
        name="name"
        value=""
        placeholder="Back and legs, Arms and Abs,..."
        onChange={null}
      />
      <TextFieldWithDelete
        label="List of videos"
        name="listOfVideos"
        value=""
        placeholder="https://www.youtube.com/playlist?list..."
        onChange={null}
      />
      <SecondaryBtn label="+ Add new link" />
      <PrimaryBtn label="Save" />
    </>
  );
}
