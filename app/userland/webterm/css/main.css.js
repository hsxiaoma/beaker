import {css} from 'beaker://app-stdlib/vendor/lit-element/lit-element.js'
import spinnerCSS from 'beaker://app-stdlib/css/com/spinner.css.js'

const cssStr = css`
${spinnerCSS}

:host {
  --default: #eef;
  --background: #223;
  --lightgray: #aab;
  --gray: #889;
  --darkgray: #556;
  --error: #f00;
  --success: #0f0;
  --warning: #ff0;
  --info: #83f;
  --font: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;

  display: block;
  box-sizing: border-box;
  font-family: var(--font);
  padding: 1rem;
  height: 100vh;
  overflow-y: auto;
  background: var(--background);
  color: var(--default);
}

:host::-webkit-scrollbar {
  display: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

img,
video,
audio {
  max-width: 100%;
}

.output .header {
  margin-top: 1rem;
  line-height: 1;
  margin-bottom: 2px;
  font-weight: bold;
  word-break: break-all;
}

.output .entry {
  white-space: pre-wrap;
  word-break: break-word;
}

.output .error {
  white-space: normal;
  color: var(--error);
}

.output .error-stack {
  padding: 1rem;
  border: 1px solid var(--error);
  font-weight: bold;
  font-size: 12px;
}

.prompt {
  display: flex;
  line-height: 1;
  font-weight: bold;
  margin-top: 1rem;
}

.prompt input {
  flex: 1;
  position: relative;
  background: transparent;
  top: -1px;
  left: -2px;
  line-height: 1;
  font-size: inherit;
  font-weight: inherit;
  padding: 0 0 0 10px;
  outline: 0;
  border: 0;
  font-family: var(--font);
  color: inherit;
}

.tab-completion {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 5px;
  border: 1px solid var(--gray);
  border-radius: 4px;
  margin: 5px 0;
  padding: 10px;
  max-width: 920px;
}

.tab-completion a {
  color: var(--lightgray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
}

.tab-completion a strong {
  color: var(--default);
}

.live-help {
  padding: 10px;
  min-height: 70px;
  white-space: pre;
  word-break: break-word;
}

.color-default { color: var(--default); }
.color-background { color: var(--background); }
.color-lightgray { color: var(--lightgray); }
.color-gray { color: var(--gray); }
.color-darkgray { color: var(--darkgray); }
.color-error { color: var(--error); }
.color-warning { color: var(--warning); }
.color-success { color: var(--success); }
.color-info { color: var(--info); }

.bg-default { background: var(--default); }
.bg-background { background: var(--background); }
.bg-lightgray { background: var(--lightgray); }
.bg-gray { background: var(--gray); }
.bg-darkgray { background: var(--darkgray); }
.bg-error { background: var(--error); }
.bg-warning { background: var(--warning); }
.bg-success { background: var(--success); }
.bg-info { background: var(--info); }
.bg-background { background: var(--background); }

.border-default { border: 1px solid var(--default); }
.border-lightgray { border: 1px solid var(--lightgray); }
.border-gray { border: 1px solid var(--gray); }
.border-darkgray { border: 1px solid var(--darkgray); }
.border-error { border: 1px solid var(--error); }
.border-warning { border: 1px solid var(--warning); }
.border-success { border: 1px solid var(--success); }
.border-info { border: 1px solid var(--info); }

.weight-thin { font-weight: 400; }
.weight-normal { font-weight: 500; }
.weight-bold { font-weight: 600; }
`
export default cssStr