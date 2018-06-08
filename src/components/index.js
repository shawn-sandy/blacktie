import riot from 'riot'
import "riot-hot-reload"

import './tags/todo.tag'
import './tags/icon.tag'
import "blacktie-cards/bt-cards-elm.tag"
import 'blacktie-file-upload/bt-upload.tag'
import 'blacktie-file-upload/bt-upload-rounded.tag'
import 'blacktie-confirm-actions/bt-confirm-action.tag'
import 'blacktie-scroll-top/bt-scroll-up.tag'
import 'blacktie-images/bt-image.tag'
import 'blacktie-content/lead/bt-elm-lead.tag'
import 'blacktie-content/truncate/bt-truncate.tag'
import "blacktie-icons/bt-icon.tag"
import 'blacktie-icons/bt-icon-bytes.tag'
import 'blacktie-icons/bt-icon-material.tag'
import 'blacktie-loaders/spin-loader/bt-loader-spin.tag'
import 'blacktie-loaders/processing/bt-loader-processing.tag'

import "blacktie-pages/index.js"

import './pages/landing.tag'
import './pages/components.tag'

riot.mount('*')
