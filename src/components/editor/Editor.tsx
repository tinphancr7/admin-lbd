import ReactQuill, { Quill } from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import BlotFormatter from 'quill-blot-formatter';
import { useController } from 'react-hook-form';
Quill.register('modules/blotFormatter', BlotFormatter);
export const Editor = ({ control, errorMessage, ...props }: any) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: '',
  });
  return (
    <div className="text-editor">
      <label
        htmlFor={props.id || props.name}
        className="block capitalize mb-2 text-sm font-medium text-gray-900"
      >
        {props.label}
      </label>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        className="w-full bg-white"
        modules={modules}
        formats={formats}
        {...field}
        {...props}
      />
      <div className="text-sm text-red-500">{errorMessage}</div>
    </div>
  );
};

export default Editor;
