const videoBlocks = document.querySelectorAll('.video')

videoBlocks.forEach((videoBlock) => {
    const playButton = videoBlock.querySelector('.video__play-click')
    const videoPlayer = videoBlock.querySelector('.video__player')
    const type = videoBlock.getAttribute('data-type')
    const srcID = videoBlock.getAttribute('data-id')
    const srcPath = videoBlock.getAttribute('data-src')
    const posterImage = videoBlock.getAttribute('data-poster')
    const hasNoImage = videoBlock.classList.contains('video--no-image')
    let mute = 0

    console.log(videoBlock)

    if (type === 'youtube' || type === 'vimeo' || type === 'media-flow') {
        const iframe = document.createElement('iframe')
        iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture')
        iframe.setAttribute('allowfullscreen', '')

        if (type === 'youtube') {
            iframe.setAttribute(
                'src',
                `https://www.youtube.com/embed/${srcID}?autoplay=0&playsinline=1&mute=${mute}&loop=1&playlist=${srcID}`
            )
        } else if (type === 'vimeo') {
            iframe.setAttribute(
                'src',
                `https://player.vimeo.com/video/${srcID}?autoplay=0&playsinline=1&mute=${mute}&loop=1`
            )
        } else if (type === 'media-flow') {
            iframe.setAttribute(
                'src',
                `https://play.mediaflow.com/ovp/11/${srcID}?theme=`
            )
            iframe.setAttribute('title', `MediaFlow video ${srcID}`)
            
            if (posterImage && videoBlock.querySelector('.video__poster img')) {
                videoBlock.querySelector('.video__poster img').setAttribute('src', posterImage)
            }
        }

        if (hasNoImage) {
            videoBlock.classList.add('video--active')
            videoPlayer.appendChild(iframe)
        } else {
            if (playButton) {
                playButton.addEventListener('click', () => {
                    videoBlock.classList.add('video--active')
                    
                    if (type === 'media-flow') {
                        iframe.setAttribute('src', `https://play.mediaflow.com/ovp/11/${srcID}?theme=&autoplay=1`)
                    } else {
                        const currentSrc = iframe.getAttribute('src')
                        const newSrc = currentSrc.replace('autoplay=0', 'autoplay=1')
                        iframe.setAttribute('src', newSrc)
                    }
                    
                    if (!videoPlayer.contains(iframe)) {
                        videoPlayer.appendChild(iframe)
                    }
                })
            }
        }
    } else if (type === 'normal') {
        const videoEl = document.createElement('video')
        //videoEl.setAttribute('autoplay', 'false')
        videoEl.setAttribute('controls', '')
        videoEl.setAttribute('playsinline', '')
        videoEl.setAttribute('loop', '')
        //videoEl.setAttribute('preload', 'true')
        videoEl.classList.add('cover')

        const sourceEl = document.createElement('source')
        sourceEl.setAttribute('src', srcPath)
        videoEl.appendChild(sourceEl)

        if (hasNoImage) {
            videoBlock.classList.add('video--active')
            videoPlayer.appendChild(videoEl)
            videoEl.play().catch(err => console.warn(err))
        } else {
            if (playButton) {
                playButton.addEventListener('click', () => {
                    videoBlock.classList.add('video--active')
                    videoPlayer.appendChild(videoEl)
                    videoEl.play().catch(err => console.warn(err))
                })
            }
        }
    }
})