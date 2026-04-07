import React, { useState } from "react"
import { Button, Snackbar } from "@mui/material"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

const ShareButton: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = window.location.href

        if (navigator.share) {
            await navigator.share({
                title: "My Music Playlist",
                url,
            })
        } else {
            await navigator.clipboard.writeText(url)
            setCopied(true)
        }
    }

    return (
        <React.Fragment>
            <Button
                variant="contained"
                startIcon={<ContentCopyIcon />}
                onClick={handleShare}
                sx={{ mb: 3 }}
            >
                {copied ? "Copied!" : "Share Playlist"}
            </Button>
            <Snackbar
                open={copied}
                autoHideDuration={2000}
                onClose={() => setCopied(false)}
                message="Link copied to clipboard!"
            />
        </React.Fragment>
    );
}

export default ShareButton