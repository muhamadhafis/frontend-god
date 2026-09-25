#!/usr/bin/env bash

# frontend-god Skill Installer
# Links or copies this skill into ~/.gemini/config/skills/frontend-god

set -e

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_DIR="$HOME/.gemini/config/skills/frontend-god"

GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
BOLD="\033[1m"
NC="\033[0m"

echo -e "${BOLD}${BLUE}=== frontend-god Skill Installer ===${NC}"
echo -e "Source: ${SOURCE_DIR}"
echo -e "Target: ${TARGET_DIR}\n"

# Ensure global skills folder exists
mkdir -p "$HOME/.gemini/config/skills"

MODE="symlink"

# Parse arguments
while [[ "$#" -gt 0 ]]; do
  case $1 in
    --symlink) MODE="symlink"; shift ;;
    --copy) MODE="copy"; shift ;;
    --uninstall) MODE="uninstall"; shift ;;
    *) echo -e "${YELLOW}Unknown option: $1${NC}. Defaulting to symlink."; shift ;;
  esac
done

if [ "$MODE" = "uninstall" ]; then
  if [ -e "$TARGET_DIR" ] || [ -L "$TARGET_DIR" ]; then
    rm -rf "$TARGET_DIR"
    echo -e "${GREEN}✓ Successfully uninstalled frontend-god from ${TARGET_DIR}${NC}"
  else
    echo -e "${YELLOW}frontend-god was not installed at ${TARGET_DIR}${NC}"
  fi
  exit 0
fi

# Remove existing link or directory if present
if [ -L "$TARGET_DIR" ]; then
  echo -e "${YELLOW}Removing existing symlink at ${TARGET_DIR}...${NC}"
  rm "$TARGET_DIR"
elif [ -d "$TARGET_DIR" ]; then
  echo -e "${YELLOW}Backing up existing directory at ${TARGET_DIR}.bak...${NC}"
  mv "$TARGET_DIR" "${TARGET_DIR}.bak.$(date +%s)"
fi

if [ "$MODE" = "symlink" ]; then
  ln -s "$SOURCE_DIR" "$TARGET_DIR"
  echo -e "${GREEN}✓ Live Symbolic Link created successfully!${NC}"
  echo -e "${BLUE}  Target:${NC} ${TARGET_DIR} -> ${SOURCE_DIR}"
  echo -e "\n${BOLD}${GREEN}⚡ REAL-TIME UPGRADES ACTIVE:${NC}"
  echo -e "Any change you make inside this folder will IMMEDIATELY be reflected in all AI agents across your machine without re-installing!"
elif [ "$MODE" = "copy" ]; then
  cp -r "$SOURCE_DIR" "$TARGET_DIR"
  echo -e "${GREEN}✓ Successfully copied skill files to ${TARGET_DIR}${NC}"
fi

echo -e "\n${BOLD}Skill Verification:${NC}"
if [ -f "$TARGET_DIR/SKILL.md" ]; then
  echo -e "  [✓] SKILL.md found: $(wc -l < "$TARGET_DIR/SKILL.md") lines"
fi
if [ -d "$TARGET_DIR/references" ]; then
  echo -e "  [✓] References folder found: $(ls "$TARGET_DIR/references" | wc -l) manuals"
fi
if [ -d "$TARGET_DIR/examples" ]; then
  echo -e "  [✓] Examples folder found: $(ls "$TARGET_DIR/examples" | wc -l) components"
fi

echo -e "\n${BOLD}${GREEN}All set! You can now use the frontend-god skill with any Antigravity agent.${NC}\n"
