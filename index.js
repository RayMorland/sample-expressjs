const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const startupMessage = `[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;170;255m▄[48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;180;248m[38;2;0;0;0m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;175;247m[38;2;0;179;247m▄[48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;170;255m [48;2;0;180;247m[38;2;0;159;236m▄[48;2;0;180;240m[38;2;0;179;247m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;255;255m[38;2;0;0;0m▄[48;2;0;179;247m[38;2;0;179;246m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;255m[38;2;0;0;0m▄[48;2;0;157;235m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;179;248m[38;2;0;0;255m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;157;235m [48;2;0;159;236m[38;2;0;157;235m▄[48;2;0;179;247m [48;2;0;181;247m[38;2;0;179;247m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;255;255m[38;2;67;62;115m▄[48;2;0;157;235m[38;2;67;64;117m▄[48;2;0;157;235m[38;2;68;63;116m▄[48;2;0;157;235m[38;2;68;63;116m▄[48;2;0;156;234m[38;2;68;63;116m▄[48;2;1;162;241m[38;2;68;63;116m▄[48;2;21;143;207m[38;2;68;63;116m▄[48;2;50;94;151m[38;2;68;63;115m▄[48;2;67;66;120m[38;2;0;179;247m▄[48;2;0;0;255m[38;2;0;179;247m▄[48;2;0;191;255m[38;2;0;179;247m▄[48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;255;255m[38;2;0;179;247m▄[48;2;0;177;245m[38;2;0;179;247m▄[48;2;0;179;248m[38;2;0;179;247m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;248m[38;2;0;179;247m▄[48;2;0;170;255m[38;2;0;179;247m▄[48;2;0;170;255m[38;2;0;179;247m▄[48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;0;0m[38;2;0;178;247m▄[48;2;0;0;0m[38;2;0;128;255m▄[48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;159;237m[38;2;0;0;0m▄[48;2;0;157;235m [48;2;0;173;244m[38;2;0;157;235m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;255;255m[38;2;0;179;247m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;255;255m[38;2;0;179;247m▄[48;2;0;179;242m[38;2;0;179;247m▄[48;2;0;178;246m[38;2;0;179;247m▄[48;2;0;179;247m[38;2;54;87;143m▄[48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m[38;2;0;179;247m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m[38;2;1;179;247m▄[48;2;0;179;247m[38;2;254;255;255m▄[48;2;0;179;247m[38;2;255;255;254m▄[48;2;0;179;247m[38;2;255;252;235m▄[48;2;0;179;247m[38;2;254;254;254m▄[48;2;0;179;247m[38;2;1;180;247m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;178;247m[38;2;0;179;247m▄[0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;128;255;255m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;0;255m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;255;255m▄[48;2;171;255;243m[38;2;172;255;242m▄[48;2;0;0;0m[38;2;170;255;255m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;174;255;244m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;157;235m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;159;236m▄[48;2;0;179;247m[38;2;0;172;243m▄[48;2;0;179;247m[38;2;0;177;246m▄[48;2;0;179;247m[38;2;0;178;247m▄[48;2;0;178;246m[38;2;51;92;149m▄[48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;17;153;217m[38;2;0;179;247m▄[48;2;0;179;247m[38;2;0;178;247m▄[48;2;0;178;247m[38;2;0;179;247m▄[48;2;0;179;247m[38;2;0;177;246m▄[48;2;0;147;230m[38;2;0;172;243m▄[48;2;0;161;237m[38;2;0;138;224m▄[48;2;0;179;247m[38;2;0;166;240m▄[48;2;0;179;247m[38;2;0;162;238m▄[48;2;0;179;247m[38;2;0;158;236m▄[48;2;2;179;247m[38;2;254;254;255m▄[48;2;255;255;255m[38;2;255;255;254m▄[48;2;255;223;64m[38;2;255;222;58m▄[48;2;254;220;59m[38;2;68;63;116m▄[48;2;64;60;117m[38;2;68;63;116m▄[48;2;71;65;115m[38;2;68;63;116m▄[48;2;255;221;55m[38;2;69;64;116m▄[48;2;0;179;247m[38;2;249;252;253m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;180;248m[38;2;0;157;235m▄[48;2;0;179;248m[38;2;0;0;0m▄[0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;255;255m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;73;218;240m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;170;255;242m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m[38;2;170;255;241m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;170;255;227m[38;2;255;255;255m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;255;255;255m▄[48;2;0;0;0m[38;2;0;255;255m▄[48;2;0;0;0m[38;2;70;220;242m▄[48;2;0;0;0m[38;2;72;220;240m▄[48;2;0;156;233m[38;2;71;218;240m▄[48;2;0;157;235m[38;2;74;221;240m▄[48;2;0;157;235m[38;2;74;221;240m▄[48;2;0;157;235m[38;2;74;220;240m▄[48;2;0;157;235m[38;2;73;221;240m▄[48;2;13;159;232m[38;2;194;189;174m▄[48;2;76;170;211m[38;2;194;189;174m▄[48;2;1;157;236m[38;2;194;189;174m▄[48;2;0;157;235m[38;2;194;189;174m▄[48;2;0;157;235m[38;2;246;229;74m▄[48;2;254;235;58m[38;2;255;235;58m▄[48;2;255;235;58m [48;2;255;235;58m [48;2;255;235;58m [48;2;255;235;58m [48;2;255;235;58m [48;2;255;235;58m [48;2;255;235;58m [48;2;255;235;58m [48;2;255;235;58m[38;2;255;235;59m▄[48;2;254;235;59m[38;2;255;235;58m▄[48;2;5;157;235m[38;2;255;235;58m▄[48;2;0;158;236m[38;2;14;160;231m▄[48;2;0;157;235m [48;2;0;157;235m[38;2;0;156;234m▄[48;2;0;138;225m[38;2;0;138;224m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;255;255;255m [48;2;255;248;212m[38;2;255;255;254m▄[48;2;255;223;57m[38;2;255;222;58m▄[48;2;253;253;254m[38;2;78;73;123m▄[48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m[38;2;67;63;116m▄[48;2;254;252;234m[38;2;254;255;254m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m[38;2;0;158;235m▄[48;2;0;155;235m[38;2;0;0;0m▄[48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;170;255;241m[38;2;191;255;223m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;255;255;255m[38;2;170;255;255m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;255;255;255m▄[48;2;162;255;232m[38;2;0;255;255m▄[48;2;0;0;0m [48;2;0;0;0m[38;2;73;219;240m▄[48;2;0;0;0m[38;2;73;220;240m▄[48;2;0;0;0m[38;2;73;220;240m▄[48;2;0;0;0m[38;2;73;220;240m▄[48;2;0;255;255m[38;2;73;220;240m▄[48;2;0;128;128m[38;2;74;220;240m▄[48;2;68;219;240m[38;2;86;225;240m▄[48;2;73;220;240m [48;2;73;220;240m[38;2;72;220;240m▄[48;2;73;220;240m[38;2;173;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;73;220;240m[38;2;172;255;242m▄[48;2;194;189;174m [48;2;194;189;174m [48;2;194;189;174m [48;2;194;189;174m [48;2;254;221;60m[38;2;255;222;59m▄[48;2;255;222;58m [48;2;255;222;58m [48;2;255;222;58m [48;2;255;221;58m[38;2;255;222;58m▄[48;2;255;222;58m [48;2;255;222;58m [48;2;255;222;58m [48;2;255;230;58m[38;2;255;222;58m▄[48;2;255;235;58m[38;2;255;222;58m▄[48;2;255;245;154m[38;2;255;222;58m▄[48;2;255;235;58m [48;2;255;235;58m [48;2;254;234;59m[38;2;255;235;58m▄[48;2;0;157;235m [48;2;0;146;228m[38;2;0;157;235m▄[48;2;0;146;229m[38;2;0;157;235m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;253;254;255m[38;2;0;157;235m▄[48;2;255;255;255m [48;2;255;222;56m[38;2;255;255;255m▄[48;2;255;222;58m[38;2;255;255;254m▄[48;2;174;154;83m[38;2;255;245;198m▄[48;2;241;219;59m[38;2;255;255;255m▄[48;2;255;221;52m[38;2;255;255;255m▄[48;2;219;241;252m[38;2;0;157;235m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;174;255;255m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;255;255m▄[48;2;0;255;255m[38;2;74;222;240m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;74;219;242m[38;2;0;0;0m▄[48;2;73;220;240m[38;2;0;0;0m▄[48;2;73;220;240m[38;2;0;0;0m▄[48;2;73;220;240m[38;2;0;0;0m▄[48;2;73;220;240m[38;2;128;255;255m▄[48;2;73;220;240m[38;2;74;218;238m▄[48;2;74;220;240m[38;2;73;220;240m▄[48;2;73;220;240m[38;2;73;220;239m▄[48;2;69;219;240m[38;2;73;220;240m▄[48;2;80;222;240m[38;2;73;220;240m▄[48;2;95;227;241m[38;2;73;220;240m▄[48;2;101;230;241m[38;2;73;220;240m▄[48;2;91;227;241m[38;2;73;220;240m▄[48;2;194;190;175m[38;2;170;162;156m▄[48;2;194;190;174m[38;2;169;162;157m▄[48;2;194;189;174m[38;2;169;162;157m▄[48;2;194;189;174m[38;2;169;162;157m▄[48;2;255;214;51m[38;2;172;163;155m▄[48;2;255;213;51m[38;2;255;199;40m▄[48;2;255;212;50m[38;2;255;199;40m▄[48;2;255;211;49m[38;2;255;199;40m▄[48;2;255;210;48m[38;2;255;199;40m▄[48;2;255;208;47m[38;2;255;199;40m▄[48;2;255;208;47m[38;2;255;199;40m▄[48;2;255;208;47m[38;2;255;199;40m▄[48;2;255;207;46m[38;2;255;199;40m▄[48;2;255;210;48m[38;2;255;199;40m▄[48;2;255;220;57m[38;2;255;199;40m▄[48;2;255;222;58m[38;2;255;199;40m▄[48;2;255;222;58m[38;2;255;198;40m▄[48;2;254;221;58m[38;2;1;157;234m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;1;157;235m[38;2;252;144;197m▄[48;2;0;157;235m[38;2;232;145;199m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;232;246;253m[38;2;0;157;235m▄[48;2;254;255;255m[38;2;0;157;235m▄[48;2;254;255;255m[38;2;0;157;235m▄[48;2;202;234;251m[38;2;0;156;235m▄[48;2;0;157;235m[38;2;111;196;235m▄[48;2;0;157;235m[38;2;226;236;235m▄[48;2;0;157;235m[38;2;222;235;235m▄[48;2;0;157;235m[38;2;222;235;235m▄[48;2;2;156;235m[38;2;222;235;235m▄[48;2;50;171;235m[38;2;222;235;235m▄[48;2;200;228;235m[38;2;222;235;235m▄[48;2;225;236;235m[38;2;255;255;255m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;255;255;255m[38;2;0;0;0m▄[48;2;170;163;157m[38;2;0;0;0m▄[48;2;255;255;255m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;255;199;41m[38;2;0;0;0m▄[48;2;255;202;38m[38;2;0;0;0m▄[48;2;255;205;37m[38;2;68;63;116m▄[48;2;255;205;37m[38;2;68;63;116m▄[48;2;255;205;37m[38;2;68;63;116m▄[48;2;255;205;37m[38;2;68;63;116m▄[48;2;255;205;37m[38;2;68;63;116m▄[48;2;255;205;37m[38;2;0;157;235m▄[48;2;255;206;38m[38;2;0;157;235m▄[48;2;255;205;37m[38;2;68;63;116m▄[48;2;169;139;74m[38;2;68;63;116m▄[48;2;68;63;116m [48;2;63;70;124m[38;2;68;63;116m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;0;157;235m [48;2;4;157;234m[38;2;0;157;235m▄[48;2;252;144;197m [48;2;252;144;197m [48;2;22;156;233m[38;2;252;144;197m▄[48;2;1;157;235m[38;2;223;232;234m▄[48;2;94;189;235m[38;2;222;235;235m▄[48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;221;235;235m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;128m[38;2;0;0;0m▄[48;2;68;63;116m[38;2;67;64;115m▄[48;2;68;63;116m [48;2;68;63;116m[38;2;1;163;239m▄[48;2;1;160;238m[38;2;0;157;235m▄[48;2;0;157;235m [48;2;0;157;235m [48;2;6;153;229m[38;2;0;157;235m▄[48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m [48;2;0;157;234m[38;2;1;156;234m▄[48;2;0;157;235m[38;2;225;236;235m▄[48;2;0;157;235m[38;2;222;235;235m▄[48;2;215;232;235m[38;2;222;235;235m▄[48;2;252;144;197m[38;2;234;108;170m▄[48;2;252;144;197m[38;2;235;101;167m▄[48;2;252;144;197m[38;2;237;107;171m▄[48;2;252;144;197m [48;2;253;141;196m[38;2;252;144;197m▄[48;2;222;235;235m[38;2;252;144;197m▄[48;2;222;235;235m[38;2;252;144;197m▄[48;2;222;235;235m[38;2;245;165;206m▄[48;2;222;235;235m[38;2;227;220;229m▄[48;2;222;235;235m[38;2;223;235;235m▄[48;2;222;235;235m [48;2;222;235;235m[38;2;255;255;255m▄[48;2;222;235;235m[38;2;0;0;0m▄[48;2;223;236;236m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;222;239m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;179;247m▄[48;2;0;255;255m[38;2;0;179;247m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;157;235m [48;2;0;157;235m[38;2;1;157;236m▄[48;2;68;63;116m [48;2;68;63;116m [48;2;68;63;116m[38;2;85;81;129m▄[48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;251;225;238m[38;2;245;249;249m▄[48;2;235;101;167m[38;2;234;97;165m▄[48;2;235;101;167m[38;2;234;93;163m▄[48;2;235;101;166m[38;2;235;101;167m▄[48;2;252;143;197m[38;2;235;101;167m▄[48;2;252;144;197m[38;2;234;100;165m▄[48;2;252;144;197m [48;2;252;144;197m [48;2;252;144;197m [48;2;0;0;0m[38;2;255;85;170m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;29;235;244m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;28;231;242m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;43;213;213m▄[48;2;0;0;0m[38;2;128;255;255m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;240;240m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;83;244;249m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;0;255;255m▄[48;2;0;0;255m[38;2;0;176;245m▄[48;2;0;255;255m[38;2;0;179;247m▄[48;2;0;176;248m[38;2;0;179;247m▄[48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m [48;2;0;179;247m[38;2;0;161;237m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;179;247m[38;2;0;157;235m▄[48;2;0;157;235m[38;2;34;143;211m▄[48;2;0;157;235m[38;2;88;84;131m▄[48;2;68;63;116m[38;2;181;189;204m▄[48;2;68;63;116m[38;2;221;234;234m▄[48;2;71;67;118m[38;2;222;235;235m▄[48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;251;252;252m[38;2;222;235;235m▄[48;2;255;255;255m[38;2;222;235;235m▄[48;2;238;125;181m[38;2;254;255;255m▄[48;2;236;106;170m[38;2;253;240;247m▄[48;2;235;101;167m [48;2;235;101;167m [48;2;252;144;197m[38;2;235;101;167m▄[48;2;252;144;197m[38;2;242;120;180m▄[48;2;252;144;197m [48;2;0;0;0m[38;2;237;188;215m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;125;245;250m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;255;255m[38;2;0;0;0m▄[48;2;128;255;255m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m[38;2;137;248;252m▄[48;2;0;0;0m[38;2;64;255;255m▄[48;2;0;0;0m[38;2;7;230;241m▄[48;2;0;0;0m[38;2;102;255;255m▄[48;2;0;255;255m[38;2;30;236;245m▄[48;2;5;229;243m[38;2;0;0;0m▄[48;2;78;244;244m[38;2;0;0;0m▄[48;2;0;128;128m[38;2;102;204;255m▄[48;2;69;235;245m[38;2;0;0;0m▄[48;2;0;0;0m[38;2;1;230;242m▄[48;2;0;0;0m[38;2;1;230;242m▄[48;2;1;228;241m[38;2;0;255;255m▄[48;2;0;0;0m[38;2;12;230;242m▄[48;2;1;206;239m[38;2;146;248;252m▄[48;2;1;230;242m[38;2;11;230;242m▄[48;2;0;157;235m[38;2;0;0;0m▄[48;2;0;157;235m[38;2;0;0;0m▄[48;2;0;157;235m[38;2;0;0;0m▄[48;2;0;158;235m[38;2;0;0;0m▄[48;2;0;157;235m[38;2;0;0;0m▄[48;2;0;157;236m[38;2;0;0;0m▄[48;2;0;255;255m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;222;235;235m[38;2;0;0;0m▄[48;2;222;235;235m[38;2;221;234;234m▄[48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m [48;2;222;235;235m[38;2;255;255;255m▄[48;2;222;236;236m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;128;255;255m[38;2;0;0;0m▄[48;2;16;230;242m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;222;235;235m[38;2;0;0;0m▄[48;2;222;235;235m[38;2;0;0;0m▄[48;2;222;235;235m[38;2;255;255;255m▄[48;2;222;235;235m[38;2;228;228;228m▄[48;2;222;235;235m[38;2;223;236;236m▄[48;2;222;235;235m[38;2;221;234;234m▄[48;2;222;235;235m [48;2;222;235;235m[38;2;223;235;235m▄[48;2;222;235;235m[38;2;223;235;235m▄[48;2;222;235;235m[38;2;219;237;237m▄[48;2;222;235;235m[38;2;255;255;255m▄[48;2;222;235;235m[38;2;0;0;0m▄[48;2;222;236;236m[38;2;0;0;0m▄[48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [48;2;0;0;0m [0m
`

app.get('/', (req, res) => res.send('Hello Digital Ocean!'))

for (let line of startupMessage.split("\n")) {
	console.log(line)
}

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))
