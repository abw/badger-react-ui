s/const \w+ = \(\) =>\n//;
s/export default \w+//;
s[import Section\s+from '@/(web/)?page/Section.jsx'][import { Section } from '\@abw/badger-website'];
s[import Example\s+from '@/site/Example.jsx'][import { Example } from '\@abw/badger-website'];
s[import HashLink\s+ from '@/(web/)?page/HashLink.jsx'][import { CodeHashLink } from '@/site/Links.jsx'];
s[<HashLink text="(\w+)"/>][<CodeHashLink id="$1"/>]g;
s/<\/?code>/`/g;
s/\{' '\}//;
s/^  >/>/;
s/^  </</;
s/^    /  /;
s/&apos;/'/g;
s/&quot;/"/g;
s/<\/?p>//;
s/^\s*$//g;
s/^<Example/\n<Example/;
