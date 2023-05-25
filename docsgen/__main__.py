"""docsgen - Tool for generating markdown documentation from godoc."""
import argparse
import pathlib
import sys

import docsgen


def main() -> None:
    """Tool cli entrypoint."""
    argparser = argparse.ArgumentParser()

    argparser.add_argument("-r", "--repository", required=True, help="Repository remote path")
    argparser.add_argument("-o", "--outpath", required=True, help="Output path (directory)")
    argparser.add_argument("-t", "--tmppath", help="Temporary path (directory)")
    argparser.add_argument("-p", "--prefix", help="URL prefix")

    args = argparser.parse_args()

    menu = docsgen.docsgen(docsgen.Arguments(
        repository=docsgen.Repository(args.repository),
        outpath=pathlib.Path(args.outpath),
        tmppath=(pathlib.Path(args.tmppath) if args.tmppath else None),
        prefix=args.prefix,
    ))

    for item in menu:
        sys.stdout.write(item + "\n")

if __name__ == "__main__":
    main()
