import os
from setuptools import setup, find_packages

with open(os.path.join(os.path.dirname(__file__), "README.md")) as readme:
    README = readme.read()

install_deps = [
                   'Django',
                   'graphene-django',
                   'graphene',
                   'django-graphql-jwt',
               ]  # fixed: was a tuple due to trailing comma
test_deps = [
    'coverage',
    'pytest',
    'pytest-cov',
    'pytest-runner'
]

setup(name='backend',
      version='0.0.1',
      description="Backend package",
      long_description=README,
      long_description_content_type="text/markdown",
      author='Oleksandr Liakhov',
      author_email='eleutherius69@gmail.com',
      license='Proprietary License',
      packages=find_packages(),
      install_requires=install_deps,
      tests_require=test_deps,
      setup_requires=['pytest-runner'],
      extras_require={'test': test_deps},
      include_package_data=True,
      )