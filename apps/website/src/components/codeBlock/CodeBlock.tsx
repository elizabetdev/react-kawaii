import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { TbCopy } from 'react-icons/tb';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './codeBlock.css';

type CodeBlockProps = {
  code: string;
  language?: string;
};
export const CodeBlock = ({ code, language = 'jsx' }: CodeBlockProps) => {
  const { theme } = useTheme();

  const codeblockTheme = theme === 'dark' ? nightOwl : oneLight;
  return (
    <div className="codeBlock">
      <IconButton onClick={() => navigator.clipboard.writeText(code)} className="codeBlockCopyButton">
        <TbCopy />
      </IconButton>

      <SyntaxHighlighter language={language} style={codeblockTheme} wrapLines={true}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
