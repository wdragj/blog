# Tries

---

## Property

---

- A trie is a tree-like data structure that stores a dynamic set or associative array where the keys are usually strings.
- No node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated.
- All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string.

<br>

There's two major benefits to a trie.
1. One of them is just organizing the data. All of these similar values are grouped in a similar part of the tree.
2. The second advantage of storing data in this way is that the time complexity, if we consider trying to look up any of the numbers that are in this trie, the time complexity is completely independent of the number of values stored in the trie.

<br><br>

## Insert

---

> **When you insert a word into a tree, the entire word could be inserted, partially inserted, or not inserted at all.**

- If the word "apple" in its sequence of characters is not in the trie, then the entire word will be inserted.
- If the word "app" is already in the trie, then the word "apple" will be partially inserted (l and e).
- If the word "apple" is already in the trie, then the word "apple" will not be inserted at all.

<br>

> **To insert a word into a trie, you need to follow these steps.**

1. Start at the root node.
2. Check if the current node has a child for the first letter of the word.
3. If there is no child, create a new node and add it as a child of the current node.
4. Move to the child node.
5. Repeat steps 2-4 until you reach the end of the word.
6. Set the current node as the end of the word.
7. Once you are at the end of the word, you can use a boolean value to indicate that the word is complete.

<br><br>

## Delete

---

> **When you delete a word from a trie, the entire word (represented as a node) could be deleted, partially deleted, or not deleted at all.**
> 
> **For a node to be deleted in trie, it must satisfy 2 conditions.**

1. The node has to be the end of the word
2. The node has no children

If both conditions above is satisfied, a node in a trie will be deleted.
