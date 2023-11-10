mkdir -p dist/styles && \
sass \
    --load-path=node_modules \
    styles/build/badger-react-ui.scss > \
    dist/styles/badger-react-ui.css && \
sass \
    --load-path=node_modules \
    --style compressed \
    styles/build/badger-react-ui.scss > \
    dist/styles/badger-react-ui.min.css && \
sass \
    --load-path=node_modules \
    styles/build/badger-css-react-ui.scss > \
    dist/styles/badger-css-react-ui.css && \
sass \
    --load-path=node_modules \
    --style compressed \
    styles/build/badger-css-react-ui.scss > \
    dist/styles/badger-css-react-ui.min.css