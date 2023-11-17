import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useController } from 'react-hook-form';
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);

// Quill.register('modules/blotFormatter', BlotFormatter);

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
      {/* <EditorToolbar /> */}
      <ReactQuill
        theme="snow"
        className="w-full bg-white"
        modules={Editor.modules}
        formats={Editor.formats}
        {...field}
        {...props}
      />
      <div className="text-sm text-red-500">{errorMessage}</div>
    </div>
  );
};
Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  imageResize: {
    parchment:
      Quill.import(
        'parchment',
      ) /* Need to tell ImageResize which Parchment implementation to use */,

    modules: ['Resize', 'DisplaySize', 'Toolbar'],
  },
};
Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'script',
  'blockquote',
  'background',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'code-block',
];

export default Editor;
