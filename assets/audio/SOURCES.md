# Ambience and sound-effect sources

Every file in `amb/` and `sfx/` is made only from CC0 (public domain dedication) recordings or from sound
synthesized with ffmpeg. No attribution is required, so nothing was added to `content/credits.json`.
Licences were read on each source page on 2026-11-18. The music files in this folder are Skye's own and are not
covered here.

Licence for every source below: Creative Commons 0 — https://creativecommons.org/publicdomain/zero/1.0/

Freesound recordings were taken from the site's own high-quality MP3 preview of each sound (the download that needs
no account), then cut, mixed, levelled and re-encoded.

## Ambience loops — `amb/` (36.5 s, MP3 44.1 kHz stereo 96 kbps, about -29 to -32.5 LUFS)

Each loop is a 40.5 s stretch whose last 4 s are crossfaded into its first 4 s (equal power), with 8 ms fades at the
file ends so a player that leaves a small gap when looping does not click.

| File | Used by | Source recording | Author | Source URL |
|---|---|---|---|---|
| `amb/port.mp3` | usb-port (and the title screen) | "Pea Point, New Brunswick, Seaside ambience." (gulls, waves, distant boats) | AlexLane | https://freesound.org/people/AlexLane/sounds/530210/ |
| | | + "Water_Lapping_Windy_Day_Gore_Creek_2.wav" (water lapping), mixed 7 dB lower | DangerLaef | https://freesound.org/people/DangerLaef/sounds/692542/ |
| `amb/city.mp3` | police, museum, library, voidworks, boutique, studio, bar-street, slos-hq, club (all street views) | "City Ambience, Night" | HECKFRICKER | https://freesound.org/people/HECKFRICKER/sounds/723696/ |
| `amb/office.mp3` | slos-hq-interior, police-interior | "Room Tone Office Building Bathroom Air Conditioner Run" (air-conditioning bed) | leonelmail | https://freesound.org/people/leonelmail/sounds/366100/ |
| | | + "Office Ambience" (typing, computer hum) | BeaconStudio | https://freesound.org/people/BeaconStudio/sounds/862604/ |
| `amb/shop.mp3` | boutique-interior, studio-interior | "Room Tone Office Building Bathroom Air Conditioner Run", a different stretch, low-passed at 6 kHz | leonelmail | https://freesound.org/people/leonelmail/sounds/366100/ |
| `amb/apartment.mp3` | apartment | "room tone quiet apartment kitchen night nice with distant city traffic and ambient hum and hiss.flac" | kyles | https://freesound.org/people/kyles/sounds/635732/ |
| `amb/library.mp3` | library-interior | "room tone medium quiet library carpeted empty with heavy building ambience +distant sounds.flac" | kyles | https://freesound.org/people/kyles/sounds/635727/ |
| `amb/museum.mp3` | museum-interior | "Empty Room Tone 4 - Large room background traffic" | leonelmail | https://freesound.org/people/leonelmail/sounds/427851/ |
| `amb/lab.mp3` | voidworks-interior | "server room binaural.wav" | dkaufman | https://freesound.org/people/dkaufman/sounds/422540/ |
| `amb/rooftop.mp3` | rooftop | "Chergui wind in Agadir" | clement.bernardeau | https://freesound.org/people/clement.bernardeau/sounds/718973/ |
| `amb/bar.mp3` | bar | "room tone quiet apartment kitchen night…" (another stretch, as the room bed) | kyles | https://freesound.org/people/kyles/sounds/635732/ |
| | | + four soft glass touches: `impactGlass_light_000/001/002/004` from Impact Sounds | Kenney (kenney.nl) | https://kenney.nl/assets/impact-sounds |
| | | + cooler hum: SYNTHESIZED (ffmpeg sine 60/120/180 Hz, very low) | — | — |
| `amb/club.mp3` | club-interior | "Empty Room Tone 4 - Large room background traffic", low-passed at 700 Hz | leonelmail | https://freesound.org/people/leonelmail/sounds/427851/ |
| | | + sub rumble: SYNTHESIZED (ffmpeg pink noise, low-passed at 150 Hz, slow tremolo). No music. | — | — |

## Sound effects — `sfx/` (MP3 44.1 kHz mono 96 kbps)

| File | Played for | Source | Author | Source URL |
|---|---|---|---|---|
| `sfx/step-1.mp3`, `step-2.mp3`, `step-3.mp3` | moving between viewpoints (two soft steps each) | `footstep_concrete_000`–`004` from Impact Sounds, low-passed | Kenney (kenney.nl) | https://kenney.nl/assets/impact-sounds |
| `sfx/door.mp3` | entering or leaving an interior | `doorOpen_1` from RPG Audio | Kenney (kenney.nl) | https://kenney.nl/assets/rpg-audio |
| `sfx/paper-1.mp3`, `paper-2.mp3` | opening the Case file and the Board | `bookFlip1`, `bookFlip2` from RPG Audio | Kenney (kenney.nl) | https://kenney.nl/assets/rpg-audio |
| `sfx/pin.mp3` | picking a Board card for a string | `impactGeneric_light_001` from Impact Sounds, low-passed | Kenney (kenney.nl) | https://kenney.nl/assets/impact-sounds |
| `sfx/string.mp3` | tying a Board connection | `pluck_002` from Interface Sounds | Kenney (kenney.nl) | https://kenney.nl/assets/interface-sounds |
| `sfx/clue.mp3` | essential clue found, deduction confirmed | `confirmation_002` from Interface Sounds | Kenney (kenney.nl) | https://kenney.nl/assets/interface-sounds |
| `sfx/key.mp3` | keypad press | `click_001` from Interface Sounds | Kenney (kenney.nl) | https://kenney.nl/assets/interface-sounds |
| `sfx/travel.mp3` | map travel | SYNTHESIZED (ffmpeg pink noise, band-passed around 700 Hz, 0.8 s swell) | — | — |

## Adding or replacing a sound

Keep new sounds CC0 or your own, add a row here, and keep ambience quiet (around -30 LUFS) so it stays under dialogue.
