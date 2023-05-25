"""External tools wrappers, used by docsgen."""
import os
import pathlib
import shutil
import sys

# Required system tools list
required = ["git", "gomarkdoc"]


def require() -> None:
    """Check the availability of utilities. If something is missing, exit with -1 code."""
    for tool in required:
        if not shutil.which(tool):
            sys.stderr.write(f"{tool} is missing") # type: ignore
            sys.exit(-1)


def clone(repository: str, dstpath: pathlib.Path) -> None:
    """Clone remote repository into local directory."""
    os.system(f"git clone -q --depth=1 {repository} {dstpath}")


def clean(dstpath: pathlib.Path) -> None:
    """Cleanup destination path."""
    os.system(f"rm -rf {dstpath}")


def gomarkdoc(pkgpath: pathlib.Path, outpath: pathlib.Path) -> None:
    """Use gomarkdoc to generate raw markdown documentation for provided package path."""
    os.system(f"gomarkdoc {pkgpath} > {outpath}")
